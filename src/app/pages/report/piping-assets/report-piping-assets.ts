import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { 
    NgxQrcodeElementTypes, 
    NgxQrcodeErrorCorrectionLevels 
} from '@techiediaries/ngx-qrcode';
import { MatPaginator } from "@angular/material/paginator";
import { environment } from "../../../../environments/environment";
import { ReportService } from "../report-service";
import { MatTableComponent } from "../../../component/mat-table/mat-table.component";
import { Variables } from "../../../component/common-variable";
import { NbToastrService } from "@nebular/theme";
import { DashboardThicknessChart } from "./chart/thickness-chart.component";
import { DashboardRemainingChart } from "./chart/remaining-chart.component";
import { ThicknessService } from "../../assesment/thickness/thickness-service";
import { PDFReportAssets } from "./pdf-report-assets/report-assets-pdf";

@Component({
    selector: 'ngx-report-piping-assets',
    templateUrl: './report-piping-assets.html',
})
export class ReportPipingAssets implements OnInit {

    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    reportURL 
    reportData

    constructor(
        private reportService : ReportService,
        private variables : Variables,
        private toastr : NbToastrService,
        private thicknesService : ThicknessService,
    ) {}    

    ngOnInit(): void {
        this.thicknesService.getDataThickness()
        .subscribe(({data} : any) => {
            this.tablePosition = data
            const firsData = data[0]
            if(!firsData) return
            this.showData(firsData)
            this.getReportData(firsData?.id)
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, 
        () => this.toastr.danger('Please add asset data.', 'Data not found.')
        )
    }

    @ViewChild(MatTableComponent) viewTable : MatTableComponent;
    getReportData(id) {
        this.reportService.getAssetsReport(id)
        .subscribe(({data : {damage_mechanism, visual_condition, proposal, asset, cml}} : any) => {

            this.damageMechanismData = this.variables.damageMechanismName?.map(({id ,piping_damage_mechanism} : any) => {
                const damage = damage_mechanism?.[id]
                if(damage) return {...damage, piping_damage_mechanism}
                return null
            }) 
            .filter(item => item!=null)
            this.viewTable.regenerateTable(this.damageMechanismData)

            this.pipingVisual = this.pipingVisual.map(({name, props}) => ({
                name, props, data : visual_condition[props] ?? null
            })) 

            this.inspectionHistoryData = proposal 
            ? [{
                ...proposal, 
                inspection_summary : proposal
                ?.inspection_method
                ?.map(({type, method, technique}) => ` ${type} ${method} ${technique}`) 
            }]
            : []
            
            this.pipingThickness = this.pipingThickness.map(({name, props}) => {
                const { 
                    reading, 
                    min_required_thickness, 
                    lt_cr, st_cr, 
                    remaining_life, 
                    half_life, 
                    retirement_date, 
                    next_tm_insp_date, 
                    next_ve_insp_date, 
                    mawp 
                } = this.variables.getThicknessCalculation({...asset, cml})
                const dataThickness = {
                    ...asset,
                    reading : reading.toFixed(4),
                    t_min : min_required_thickness.toFixed(4),
                    lt_cr : lt_cr.toFixed(4),
                    st_cr : st_cr.toFixed(4),
                    remaining_life : remaining_life.toFixed(4),
                    half_life : half_life.toFixed(4),
                    retirement_date,
                    next_tm_insp_date,
                    next_ve_insp_date,
                    mawp : mawp.toFixed(4)
                }

                return {
                    name,
                    props,
                    data : dataThickness[props],
                }
            })

            this.reportData = {
                ...asset, 
                corrosion_allowance : asset.corrosion_allowance.toFixed(3),
                mechanical_allowance : asset.mechanical_allowance.toFixed(3),
                nominal_thickness : asset.nominal_thickness.toFixed(3),
                damage_mechanism : this.damageMechanismData,
                piping_visual : this.pipingVisual,
                inspection : this.inspectionHistoryData,
                piping_thickness : this.pipingThickness,
                thickness_chart : this.thicknessChart.chart.toBase64Image(),
                remaining_chart : this.remainingChart.chart.toBase64Image()
            }
        },
        () => this.toastr.danger('Please add asset data.', 'Data not found.')
        )
    }

    seeDocument() {
        this.reportService.getAttachment(this.pipeData?.attachment)
        .subscribe(data => {
          this.toastr.info("Getting your document. Please Wait...", "Download PDF")
          const file = new Blob([data], { type: 'application/pdf' });            
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        })
    }
  
    tablePosition:any[] = []
    dataSource
    displayedColumns: string[] = ['piping_id'];
    resultsLength = 0;
    pipeData : any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    @ViewChild(DashboardThicknessChart) thicknessChart : DashboardThicknessChart
    @ViewChild(DashboardRemainingChart) remainingChart : DashboardRemainingChart

    @ViewChild(PDFReportAssets) pdfReportAssets : PDFReportAssets

    imageLink : any[] = []
    showData(element) {
        const qrcode = element.qr_code;
        this.getReportData(element.id)
        if(qrcode) this.reportURL = environment.apiUrl + "/qr_code/" + element.qr_code
        if(!qrcode) this.reportURL = null

        this.pipeData = element
        
        this.imageLink = typeof element.images == "object" 
        ? element?.images?.map(image => 
            ({src : environment.apiUrl + '/image/' + image, alt : 'Pipe Asssets' })
        )
        : []
        
        if(!element) return;
        this.variables.removeChartData(this.thicknessChart)
        this.variables.removeChartData(this.remainingChart)
        this.thicknessChartData(this.thicknessChart, element)
        this.remainingLifeChartData(this.remainingChart, element)
    }

    thicknessChartData(chart, {cml}) {
        const {datasets, allYear} = this.variables.getCharCML(cml, "last_thickness_reading")
        chart.data.labels = allYear
        chart.chart.data.datasets = datasets
        chart.chart.update();
    } 

    corrosionChartData(chart, asset) {
        const cml = this.variables.getCMLCalc(asset)
        const {datasets, allYear} = this.variables.getCharCML(cml, "lt_cr")
        chart.data.labels = allYear
        chart.chart.data.datasets = datasets
        chart.chart.update();
    }

    remainingLifeChartData(chart, asset) {
        const cml = this.variables.getCMLCalc(asset)
        const {datasets, allYear} = this.variables.getCharCML(cml, "remaining_life")
        chart.data.labels = allYear
        chart.chart.data.datasets = datasets
        chart.chart.update();
    }

    filterByClass(val) {
        let tableData = this.tablePosition.filter(item => item.class == val)
        if(val == "All") tableData = this.tablePosition
        this.dataSource = new MatTableDataSource(tableData)
    }

    filterByMawp(sort) {
        if(sort == "No Filter") 
        return this.dataSource = new MatTableDataSource(this.tablePosition)
        
        const tableData = this.variables.sortByMawp(this.tablePosition, sort)
        this.dataSource = new MatTableDataSource(tableData)
    }

    spesificationItem = [
        { props : 'nominal_pipe_size', name : "Nominal Pipe Size", unit : 'mm' },
        { props : 'pipe_design_code', name : "Pipe Design Code" },
        { props : 'schedule', name : "Schedule", unit : 'mm' },
        { props : 'outside_diameter', name : "Outside Diameter" },
        { props : 'longtd_quality_factor', name : "Longtd. Quality Factor (E)" },
        { props : 'weld_joint_factor', name : "Weld Joint Factor (W)" },
        { props : 'allowable_unit_stress', name : "Allowable Unit Stress (S)", unit : 'psi' },
        { props : 'coefficient', name : "Coefficient (Y)" },
        { props : 'min_design_pressure', name : "Min. Design Pressure (P min)", unit : 'psig' },
        { props : 'max_design_pressure', name : "Max. Design Pressure (P max)", unit : 'psig' },
        { props : 'min_design_temperature', name : "Min. Design Temperature (T min)", unit : 'F' },
        { props : 'max_design_temperature', name : "Max Design Temperature (T max)", unit : 'F' },
        { props : 'corrosion_allowance', name : "Corrosion Allowance", unit : 'mm' },
        { props : 'mechanical_allowance', name : "Mechanical Allowances", unit : 'mm' },
        { props : 'min_structural_thickness', name : "Min. Structural Thickness", unit : 'mm' },
        { props : 'min_alert_thickness', name : "Min. Alert Thickness", unit : 'mm' },
        { props : 'nominal_thickness', name : "Nominal Thickness", unit : 'mm' },
    ];

    pipingVisual : any = [
        { name : 'Leaks', props : 'leaks_condition', data : null },
        { name : 'Misalignment', props : 'misalignment_condition', data : null},
        { name : 'Vibration', props : 'vibration_condition', data : null },
        { name : 'Supports', props : 'supports_condition', data : null },
        { name : 'Corrosion', props : 'corrosion_condition', data : null },
        { name : 'Insulation', props : 'insulation_condition', data : null },
    ]

    pipingThickness = [
        { name : 'Reading', props : 'reading' },
        { name : 'Long Term Cr', props : 'lt_cr' },
        { name : 'Remaining Life', props : 'remaining_life' },
        { name : 'Thick. Min', props : 't_min' },
        { name : 'Short Term CR', props : 'st_cr' },
        { name : 'Half Life', props : 'half_life' },
        { name : 'Retirement Date', props : 'retirement_date' },
    ]

    damageMechanismData : any[];
    damageMechanismDetails = [ 
        { type : 'text', prop : 'piping_damage_mechanism', head : 'Piping Damage Mechanism', width : '200px' },
        { type : 'text', prop : 'notes', head : 'Notes', width : '200px' },
        { type : 'text', prop : 'type_location', head : 'Expected Type/Location', width : '200px' },
        { type : 'text', prop : 'last_insp_date', head : 'Last Insp.Date', width : '200px' },
        { type : 'text', prop : 'insp_due_date', head : 'Insp. Due Date', width : '200px' },
    ]

    inspectionHistoryData:any[] = []
    inspectionHistoryDetails = [ 
        { type : 'text', prop : 'proposal_id', head : 'Inspection Id', width : '100px' },
        { type : 'editable date', prop : 'inspection_date', head : 'Inspection Date', width : '200px' },
        { type : 'text', prop : 'inspection_summary', head : 'Inspection Summary', width : '300px' },
        { type : 'check', prop : 'caried_out', head : 'Caried Out', width : '50px' },
    ]

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
  
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }
}