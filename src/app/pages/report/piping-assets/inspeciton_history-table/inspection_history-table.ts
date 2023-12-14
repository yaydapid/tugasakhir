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
        this.tableData = this.tableData.map((item, index) => {
            const { inspection_date } = item
            return {
                ...item,
                method_index : index,
                inspection_date : inspection_date ? new Date(inspection_date) : null,
            }
        })
    }

    @Input() tableData = []

    onClickTable({$event : carried_out, element : e}){
        let {inspection_date, id, inspection_method, method_index} = e
        
        if(!inspection_date) return this.toastr.danger("Please input Inspection date", "Inspection Date is Empty");
        inspection_date = this.datePipe.transform(inspection_date, 'yyyy-MM-dd')
        console.log(inspection_date)
        inspection_method[method_index] = { ...inspection_method[method_index], carried_out, inspection_date } 

        e = {...e, inspection_method}

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