import { Component, Input, OnInit } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { ProposalService } from "../../../dashboard/view-proposal/view-proposal.service";
import { DatePipe } from "@angular/common";

@Component({
    selector : "ngx-inspection_history_table",
    templateUrl : "./inspection_history-table.html"
})
export class InspectionHistoryTable implements OnInit {
    constructor(
        private toastr : NbToastrService,
        private proposalService : ProposalService,
        private datePipe : DatePipe,
    ){ }
    ngOnInit(): void {
        this.tableData = this.tableData.map(item => {
            return {
                ...item,
                inspection_date : new Date(item.inspection_date),
            }
        })
    }

    @Input() tableData = []

    onClickTable({$event : carried_out, element : e}){
        let {inspection_date, id} = e
        if(!inspection_date) return this.toastr.danger("Please input Inspection date", "Inspection Date is Empty");
        inspection_date = this.datePipe.transform(inspection_date, 'yyyy-MM-dd')
        e = {...e, inspection_date, carried_out}

        this.proposalService.updateProposal(e, id)
        .subscribe(
            () => this.ngOnInit(),
            () => this.toastr.danger('Please check your connection and try again.', 'Your request failed.'),
            () => this.toastr.success('Data has been updated.', 'Your request success.')
        )
    }

    inspectionHistoryDetails =    
    [ 
        { type : 'text', prop : 'proposal_id', head : 'Inspection Id', width : '100px' },
        { type : 'editable date', prop : 'inspection_date', head : 'Inspection Date', width : '200px' },
        { type : 'text', prop : 'inspection_summary', head : 'Inspection Summary', width : '300px' },
        { type : 'text', prop : 'coverage', head : '%', width : '30px' },
        { type : 'check', prop : 'carried_out', head : 'Caried Out', width : '50px' },
    ]
}