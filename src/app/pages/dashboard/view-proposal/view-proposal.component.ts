import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { DatePipe } from '@angular/common';
import { ProposalService } from './view-proposal.service';
import { MatTableComponent } from '../../../component/mat-table/mat-table.component';
import { PDFProposalDashboard } from './pdf-proposal/pdf-proposal-dashboard';
import { DeleteDialogComponent } from '../../../component/delete dialog/delete-dialog.component';

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
  @ViewChild(PDFProposalDashboard) pdfProposals : PDFProposalDashboard
  ngOnInit(): void {
    this.proposalService.getProposals()
    .subscribe(({data} : any) => {
      this.tableData = data.map(item => {
        const list_circuit = item.circuit.map(circuit => {
          return [
            circuit.piping_circuit_id,
            ...circuit.piping.map(({piping_id}) => " " + piping_id)
          ]
        })

        return {
          ...item,
          list_circuit : [...list_circuit]
        }
      })

      this.viewTable.regenerateTable(this.tableData)
    })
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '20px' },
    { type : 'text', prop : 'proposal_id', head : 'Proposal ID', width : '100px' },
    { type : 'text', prop : 'inspection_planned_date', head : 'Inspection Plan Date', width : '200px' },
    { type : 'text', prop : 'list_circuit', head : 'Piping Circuit / Assets', width : '200px' },
    { type : 'text', prop : 'remarks', head : 'Remarks', width : '400px' },
    { type : 'button', prop : 'edit', width : '40px', button : [
      { icon : 'edit-outline', status : 'info', title : "update-proposal" },
      { icon : 'trash-2-outline', status : 'danger', title : "delete-proposal" },
    ]},
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
      // return console.log(newData)
      if(!newData) return
      const {inspection_planned_date, recomendation_date} = newData
      newData = {
        ...newData,
        inspection_planned_date : this.datePipe.transform(inspection_planned_date, 'yyyy-MM-dd'),
        recomendation_date : this.datePipe.transform(recomendation_date, 'yyyy-MM-dd')
      }

      this.proposalService.addProposals(newData)
      .subscribe(
        () => this.ngOnInit(),
        () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
        () => this.toastrService.success('Data has been added.', 'Your request success.')
      )
    });
  }

  onClickTable(data, title) {
    if(title == 'update-proposal') this.updateProposal(data)
    if(title == 'delete-proposal') this.deleteProposal(data)
  }

  updateProposal(data) {
    this.dialogService.open(AddProposalComponent, {
      context: {
        dialogData : {
          title: 'Add Proposal',
          data : {
            ...data,
            inspection_planned_date : new Date(data.inspection_planned_date),
          }
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

      this.proposalService.updateProposal(newData, data.id)
      .subscribe(
        () => this.ngOnInit(),
        () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
        () => this.toastrService.success('Data has been updated.', 'Your request success.')
      )
    });
  }

  deleteProposal(data) {
    this.dialogService.open(DeleteDialogComponent, {
      context: {
        dialogData : {
          title : "Delete Assets",
          name : data.piping_name,
          id : data.id
        }
      },
    })
    .onClose
    .subscribe(data => {
      if(data)
      this.proposalService.deleteProposal(data.id)
      .subscribe(
        () => this.ngOnInit(),
        () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
        () => this.toastrService.success('Data has been delete.', 'Your request success.')
        )
    });
  }
}
