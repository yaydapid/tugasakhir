import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } 
        from '@techiediaries/ngx-qrcode';
import { MatPaginator } from "@angular/material/paginator";
import { PipingAssetsService } from "../../dashboard/piping-assets/piping-assets.service";
import { environment } from "../../../../environments/environment";
import { ReportService } from "../report-service";
import { MatTableComponent } from "../../../component/mat-table/mat-table.component";
import { Variables } from "../../../component/common-variable";
import { NbToastrService } from "@nebular/theme";

@Component({
    selector: 'ngx-report-piping-assets',
    templateUrl: './report-piping-assets.html',
})
export class ReportPipingAssets implements OnInit {

    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'https://www.google.com/';

    constructor(
        private pipingAssetsService : PipingAssetsService,
        private reportService : ReportService,
        private variables : Variables,
        private toastr : NbToastrService
    ) {}    

    ngOnInit(): void {
        this.pipingAssetsService.getPipingAssets()
        .subscribe(({data} : any) => {
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
        .subscribe(({data : {damage_mechanism, visual_condition}} : any) => {
            this.damageMechanismData = this.variables.damageMechanismName.map(({id ,piping_damage_mechanism} : any) => {
                const damage = damage_mechanism?.[id]
                if(damage) return {...damage, piping_damage_mechanism}
                return null
            }) 
            .filter(item => item!=null)
            this.viewTable.regenerateTable(this.damageMechanismData)

            this.pipingVisual = this.pipingVisual.map(({name, props}) => ({
                name, props, data : visual_condition[props] ?? null
            })) 

            console.log(this.pipingVisual)
        },
        () => this.toastr.danger('Please add asset data.', 'Data not found.')
        )
    }
  
    tablePosition:any[] = []
    dataSource = new MatTableDataSource(this.tablePosition);
    displayedColumns: string[] = ['piping_id'];
    resultsLength = 0;
    pipeData : any;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    imageLink : any[] = []
    showData(element) {
        this.getReportData(element?.id)
        this.pipeData = element;
        this.imageLink = element?.images?.map(image => 
            ({src : environment.apiUrl + '/image/' + image, alt : 'Pipe Asssets' })
        );
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
        { name : 'Long Term Cr', props : 'long_term_cr' },
        { name : 'Remaining Life', props : 'remaining_life' },
        { name : 'Thick. Min', props : 'thick_min' },
        { name : 'Short Term CR', props : 'short_term_cr' },
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
        { type : 'text', prop : 'inspection_id', head : 'Inspection Id', width : '200px' },
        { type : 'text', prop : 'inspection_date', head : 'Inspection Date', width : '200px' },
        { type : 'text', prop : 'damage_mechanism', head : 'Damage Mechanism', width : '200px' },
        { type : 'text', prop : 'inspection_summary', head : 'Inspection Summary', width : '200px' },
        { type : 'text', prop : 'caried_out', head : 'Caried Out', width : '200px' },
    ]

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
  
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }
}