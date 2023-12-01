import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector : "ngx-inspection_history_table",
    templateUrl : "./inspection_history-table.html"
})
export class InspectionHistoryTable implements OnInit {

    ngOnInit(): void {
    }

    @Input() tableData = []

    onClickTable(e){
        console.log(e)
    }

    inspectionHistoryDetails =    
    [ 
        { type : 'text', prop : 'proposal_id', head : 'Inspection Id', width : '100px' },
        { type : 'editable date', prop : 'inspection_date', head : 'Inspection Date', width : '200px' },
        { type : 'text', prop : 'inspection_summary', head : 'Inspection Summary', width : '300px' },
        { type : 'text', prop : 'coverage', head : '%', width : '30px' },
        { type : 'check', prop : 'caried_out', head : 'Caried Out', width : '50px' },
    ]
}