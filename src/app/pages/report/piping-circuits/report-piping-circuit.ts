import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } 
        from '@techiediaries/ngx-qrcode';
import { MatPaginator } from "@angular/material/paginator";
import { PipingCircuitService } from "../../dashboard/piping-circuits/piping-circuits.service";
import { environment } from "../../../../environments/environment";
import { ReportService } from "../report-service";
import { Variables } from "../../../component/common-variable";

@Component({
    selector: 'ngx-report-piping-circuit',
    templateUrl: './report-piping-circuit.html',
})
export class ReportPipingCircuit implements OnInit {
    
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'https://www.google.com/';

    constructor (
        private pipingCircuitService : PipingCircuitService,
        private reportService : ReportService,
        private variables : Variables
    ) {}

    ngOnInit(): void {
        this.pipingCircuitService.getPipingCircuits()
        .subscribe(({data} : any) => {
            const firstData = data[0] 
            if(!firstData) return
            this.showData(firstData)
            this.getCircuitReport(firstData?.id)

            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
    }

    getCircuitReport(id) {
        this.reportService.getCircuitReport(id)
        .subscribe(({data : {assets, circuit}} : any) => {

            this.pipingVisual = this.pipingVisual.map(({name, props}) => ({
                name, props, 
                data : this.switchToLevel(Math.round(this.visualConditionAvg(assets, props) / assets.length))  
            }))

            assets.forEach(({damage_mechanism}) => {
                const damage = this.variables.damageMechanismName
                .map(({id ,piping_damage_mechanism} : any) => {
                    const damage = damage_mechanism?.[id]
                    if(damage) return {...damage, piping_damage_mechanism}
                    return null
                }) 
                .filter(item => item!=null)
                .map(({piping_damage_mechanism}) => ({name : piping_damage_mechanism}))

                damage.forEach(element => {
                    if(!this.activeDamageMechaninsm.includes(element)) 
                    this.activeDamageMechaninsm.push(element)
                });
            });

            this.pipingThicknessData = assets.map(asset => asset.asset)
            console.log(assets)
        })
    }

    visualConditionAvg(asset, props) {
        return asset.map(x => this.switchToPoint(x.visual_condition[props]))
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
  
    tablePosition:any[] = []
    dataSource = new MatTableDataSource(this.tablePosition);
    displayedColumns: string[] = ['piping_circuit_name' ];
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
        { type : 'text', prop : 'rl', head : 'RL (Years)', width : '200px' },
        { type : 'text', prop : 'hl', head : 'HL (Years)', width : '200px' },
        { type : 'text', prop : 'retriement_date', head : 'Retriement date', width : '200px' },
    ]

    inspectionHistoryDetails = [
        { type : 'text', prop : 'inspection_id', head : 'Inspection Id', width : '200px' },
        { type : 'text', prop : 'inspection_date', head : 'Inspection Date', width : '200px' },
        { type : 'text', prop : 'inspection_summary', head : 'Inspection Summary', width : '200px' },
        { type : 'text', prop : 'caried_out', head : 'Caried Out', width : '200px' },
    ]

    showData(element) {
        this.selectionData = element;
        this.imageLink = element?.images?.map(image => 
            ({src : environment.apiUrl + '/image/' + image, alt : 'Pipe Asssets' })
        );  
    }
  
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
  
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }
}