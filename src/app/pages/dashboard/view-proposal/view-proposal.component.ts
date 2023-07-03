import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { DatePipe } from '@angular/common';
import { ProposalService } from './view-proposal.service';
import { MatTableComponent } from '../../../component/mat-table/mat-table.component';

@Injectable({
  providedIn : 'root'
})
@Component({
  selector: 'ngx-view-proposal',
  templateUrl: './view-proposal.component.html',
})
export class ViewProposalComponent implements OnInit {
  constructor(
    private proposalService : ProposalService,
    private dialogService : NbDialogService,
    private datePipe : DatePipe,
    private toastrService : NbToastrService
  ) {}

  @ViewChild(MatTableComponent) viewTable : MatTableComponent;
  ngOnInit(): void {
    this.proposalService.getProposals()
    .subscribe(({data} : any) => {
      this.tableData = data;
      this.viewTable.regenerateTable(data)
    })
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '20px' },
    { type : 'text', prop : 'proposal_id', head : 'Proposal ID', width : '100px' },
    { type : 'text', prop : 'inspection_planned_date', head : 'Inspection Plan Date', width : '200px' },
    { type : 'text', prop : 'piping_circuit', head : 'Piping Circuit', width : '200px' },
    { type : 'text', prop : 'remarks', head : 'Remarks', width : '200px' },
  ]

  addProposal() {
    this.dialogService.open(AddProposalComponent, {
      context: {
        dialogData : {
          title: 'Add Proposal',
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(!newData) return
      const {inspection_planned_date, recomendation_date} = newData
      newData = {
        ...newData,
        inspection_planned_date : this.datePipe.transform(inspection_planned_date, 'yyyy-MM-dd'),
        recomendation_date : this.datePipe.transform(recomendation_date, 'yyyy-MM-dd')
      }

      console.log(newData)
      this.proposalService.addProposals(newData)
      .subscribe(
        () => this.ngOnInit(),
        () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
        () => this.toastrService.success('Data has been added.', 'Your request success.')
      )
    });

  }

}
