import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { 
    NgxQrcodeElementTypes, 
    NgxQrcodeErrorCorrectionLevels 
} from '@techiediaries/ngx-qrcode';
import { MatPaginator } from "@angular/material/paginator";
import { PipingCircuitService } from "../../dashboard/piping-circuits/piping-circuits.service";
import { environment } from "../../../../environments/environment";
import { ReportService } from "../report-service";
import { Variables } from "../../../component/common-variable";
import { PipingCircuitChart } from "./chart/piping-circuit-trend-chart";
import { PDFReportCML } from "./pdf-report-cml/report-cml-pdf";

@Component({
    selector: 'ngx-report-piping-circuit',
    templateUrl: './report-piping-circuit.html',
})
export class ReportPipingCircuit implements OnInit {
    
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    reportURL;

    constructor (
        private pipingCircuitService : PipingCircuitService,
        private reportService : ReportService,
        private variables : Variables
    ) {}

    public datasets: any = [
        {
            label: "Reading (mm)",
            yAxisID: 'A',
            prop : 'reading'
        },
        {
            label: "T minimum (mm)",
            yAxisID: 'A',
            prop : 'min_required_thickness'
        },
        {
            label: "Nominal Thickness (mm)",
            yAxisID: 'A',
            prop : 'nominal_thickness'
        },
        {
            label: "Corrosion Rate (mm/Year)",
            yAxisID: 'B',
            prop : 'lt_cr'
        },
    ]

    @ViewChild(PipingCircuitChart) circuitChart : PipingCircuitChart
    @ViewChild(PDFReportCML) pdfReportCML : PDFReportCML

    ngOnInit(): void {
        this.pipingCircuitService.getPipingCircuits()
        .subscribe(({data} : any) => {
            this.tablePosition = data
            const firstData = data[0] 
            if(!firstData) return
            this.showData(firstData)
            this.getCircuitReport(firstData?.id)

            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
    }

    reportData;
    getCircuitReport(id) {

        this.reportService.getCircuitReport(id)
        .subscribe(({data : { assets }} : any) => {

            const chartData = assets.map(({asset, cml} : any) => ({...asset, cml}))
            this.circuitChartData(this.circuitChart, {piping : chartData})

            this.pipingVisual = this.pipingVisual.map(({name, props}) => ({
                name, props,
                data : this.switchToLevel(Math.round(this.visualConditionAvg(assets, props) / assets.length))  
            }))

            assets.filter(x => x !=null).forEach(({damage_mechanism, proposal } : any) => {
                const inspectionProposal = this.inspectionHistoryData.find(i => i.id == proposal?.id)
                if(!inspectionProposal) {
                    const inspection_summary = proposal 
                    ? proposal.inspection_method
                    ?.map(({type, technique,method}) => ` ${type} ${method} ${technique}`)
                    : []

                    if(inspection_summary.length)
                    this.inspectionHistoryData.push({...proposal, inspection_summary})
                }

                const damage = this.variables.damageMechanismName
                .map(({id ,piping_damage_mechanism} : any) => {
                    const damage = damage_mechanism?.[id]
                    if(damage) return {...damage, piping_damage_mechanism}
                    return null
                })  
                .filter(item => item!=null)
                .map(({piping_damage_mechanism}) => piping_damage_mechanism)

                damage.forEach(element => {
                    if(!this.activeDamageMechaninsm.includes(element)) 
                    this.activeDamageMechaninsm.push(element)
                });

            });

            this.pipingThicknessData = assets.map(asset => {
                const {
                    min_required_thickness,
                    reading,
                    lt_cr,
                    st_cr,
                    remaining_life,
                    half_life,
                    retirement_date,
                    next_tm_insp_date,
                    next_ve_insp_date,
                    mawp
                } = this.variables.getThicknessCalculation({...asset.asset, cml : asset.cml})

                return {
                    ...asset.asset,
                    min_required_thickness : min_required_thickness.toFixed(2),
                    reading : reading.toFixed(2),
                    lt_cr : lt_cr.toFixed(2),
                    st_cr : st_cr.toFixed(2),
                    remaining_life : remaining_life.toFixed(2),
                    half_life : half_life.toFixed(2),
                    retirement_date,
                    next_tm_insp_date,
                    next_ve_insp_date,
                    mawp : mawp.toFixed(2)
                }
            })

            this.reportData = {
                ...this.selectionData,
                piping_visual : this.pipingVisual,
                thickness : this.pipingThicknessData,
                damage_mechanism : this.activeDamageMechaninsm,
                inspection_history : this.inspectionHistoryData,
                trend_chart : this.circuitChart.chart.toBase64Image()
            }

            console.log(this.pipingThicknessData)

        })
    }

    circuitChartData(chart, circuit) {
        const { piping } = circuit
        const allPipe = piping?.map(c=>c.piping_id)
        this.variables.removeChartData(this.circuitChart)
    
        const pipingCalc = piping.map(p => this.variables.getThicknessCalculation(p)) 
        chart.data.labels = allPipe
        const dataSet =
        this.datasets
        .map(item => {
          const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
          const data = allPipe.map(pipe=>pipingCalc.find(p=>p.piping_id == pipe)[item.prop])
          return {
            ...item,
            borderColor : color,
            backgroundColor : color,
            data
          }
        })
        chart.chart.data.datasets = dataSet
        chart.chart.update();
    } 

    visualConditionAvg(asset, props) {
        return asset?.map(x => this.switchToPoint(x?.visual_condition?.[props]))
        .reduce((x,y) =>  x + y , 0)
    }

    switchToPoint(c) {
        if(c == 'Excellent')        return 5
        if(c == 'Good')             return 4
        if(c == 'Average')          return 3
        if(c == 'Below Average')    return 2
        if(c == 'Poor')             return 1  
        return 0
    }

    switchToLevel(l) {
        if(l == 5) return 'Excellent'
        if(l == 4) return 'Good'
        if(l == 3) return 'Average'
        if(l == 2) return 'Below Average'
        if(l == 1) return 'Poor'
        return null
    }
    
    filterByClass(val) {
        let tableData = this.tablePosition.filter(item => item.class == val)
        if(val == "All") tableData = this.tablePosition
        this.dataSource = new MatTableDataSource(tableData)
    }
  
    tablePosition:any[] = []
    dataSource = new MatTableDataSource(this.tablePosition);
    displayedColumns: string[] = ['piping_circuit_id' ];
    resultsLength = 0;
    selectionData;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    imageLink : any[] = []
    pipingVisual = [
        { name : 'Leaks', props : 'leaks_condition', data : null },
        { name : 'Misalignment', props : 'misalignment_condition', data : null },
        { name : 'Vibration', props : 'vibration_condition', data : null },
        { name : 'Supports', props : 'supports_condition', data : null },
        { name : 'Corrosion', props : 'corrosion_condition', data : null },
        { name : 'Insulation', props : 'insulation_condition', data : null },
    ]

    activeDamageMechaninsm : any[] = [ ]
    pipingThicknessData:any[]
    columnDetails = [ 
        { type : 'text', prop : 'piping_id', head : 'Piping Id', width : '200px' },
        { type : 'text', prop : 'reading', head : 'Reading (mm)', width : '200px' },
        { type : 'text', prop : 'min_required_thickness', head : 'T min (mm)', width : '200px' },
        { type : 'text', prop : 'lt_cr', head : 'LT CR (mm/Year)', width : '200px' },
        { type : 'text', prop : 'st_cr', head : 'ST CR (mm/Year)', width : '200px' },
        { type : 'text', prop : 'remaining_life', head : 'RL (Years)', width : '200px' },
        { type : 'text', prop : 'half_life', head : 'HL (Years)', width : '200px' },
        { type : 'text', prop : 'retirement_date', head : 'Retirement date', width : '200px' },
        { type : 'text', prop : 'next_tm_insp_date', head : 'Next TM', width : '200px' },
        { type : 'text', prop : 'next_ve_insp_date', head : 'Next VE', width : '200px' },
        { type : 'text', prop : 'mawp', head : 'MAWP', width : '200px' },
    ]

    inspectionHistoryData : any[] = []
    inspectionHistoryDetails = [
        { type : 'text', prop : 'proposal_id', head : 'Inspection Id', width : '100px' },
        { type : 'editable date', prop : 'inspection_date', head : 'Inspection Date', width : '200px' },
        { type : 'text', prop : 'inspection_summary', head : 'Inspection Summary', width : '300px' },
        { type : 'check', prop : 'caried_out', head : 'Caried Out', width : '50px' },
    ]

    showData(element) {
        this.selectionData = element;
        this.getCircuitReport(element.id)
        this.imageLink = element?.images?.map(image => 
            ({src : environment.apiUrl + '/image/' + image, alt : 'Pipe Asssets' })
        );  

        const qrcode = element.qr_code;
        if(qrcode) this.reportURL = environment.apiUrl + "/qr_code/" + element.qr_code
        if(!qrcode) this.reportURL = null
    }
  
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
  
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }
}