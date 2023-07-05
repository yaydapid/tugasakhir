import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CMLService } from './cml.servivce';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddCMLComponent } from './add-cml/add-cml.component';
import { MatTableComponent } from '../../component/mat-table/mat-table.component';
import { DatePipe } from '@angular/common';
import { DeleteDialogComponent } from '../../component/delete dialog/delete-dialog.component';
import { Variables } from '../../component/common-variable';

@Injectable({
  providedIn : 'root'
})

@Component({
  selector: 'ngx-cml',
  templateUrl: './cml.component.html',
})
export class CmlComponent implements OnInit {

  constructor(
    private activatedroute : ActivatedRoute,
    private cmlService : CMLService,
    private dialogService : NbDialogService,
    private datePipe: DatePipe,
    private toastrService : NbToastrService,
    private variables : Variables
  ) { }

  ngOnInit(): void {
    const paramId = this.activatedroute.snapshot.paramMap.get('id')
    this.cmlService.getCML(paramId)
    .subscribe(({data, piping} : any) => {
      this.piping = piping;

      let years : any = ['All']
      this.tableHeader = { 
        title : piping.piping_id, 
        filter : [
          { name : "Year", value : years.sort((a,b) => a - b), title : 'cml-year' } 
        ]
      }

      const {nominal_thickness, min_required_thickness} = this.variables.getAssetsFormula(piping);
      this.tableData = data.map((data : any) => {
        const calculated_cr : any = this.variables.getCalculatedLTCR({...data, ...piping})
        if(!years.includes(data.year)) years.push(data.year);
        return {
          ...data,
          nominal_thickness,
          min_required_thickness : min_required_thickness.toFixed(4),
          calculated_cr : calculated_cr.toFixed(3),
        }
      })

      this.viewTable.regenerateTable(this.tableData)
    })
  }

  @ViewChild(MatTableComponent) viewTable : MatTableComponent;
  piping

  tableHeader : any
  tableData:any[] = []
  columnDetails = [ 
    { type : 'text', prop : 'cml_id', head : 'CML Id', width : '200px' },
    { type : 'text', prop : 'gauge_point', head : 'Gauge Point', width : '200px' },
    { type : 'text', prop : 'point_location', head : 'Point Location', width : '200px' },
    { type : 'text', prop : 'nominal_thickness', head : 'Nominal Thickness (mm)', width : '200px' },
    { type : 'text', prop : 'min_required_thickness', head : 'Min. Required Thickness (mm)', width : '200px' },
    { type : 'text', prop : 'last_thickness_reading', head : 'Last Thickness Reading (mm)', width : '200px' },
    { type : 'text', prop : 'last_thickness_reading_date', head : 'Last Thickness Date', width : '200px' },
    { type : 'text', prop : 'calculated_cr', head : 'Calculated CR (mm/Year)', width : '200px' },
    { type : 'button', prop : 'edit', width : '80px', button : [
      { icon : 'edit-outline', status : 'info', title : "edit-cml" },
      { icon : 'trash-2-outline', status : 'danger', title : "delete-cml" },
    ]},
  ]

  onClickTable(data, title) {
    if(title == 'delete-cml') this.deleteCML(data)
    if(title == 'edit-cml') this.updateCML(data)
    if(title == 'cml-year') {
      let tableData;
      if(data == 'All') tableData = this.tableData;
      else tableData = this.tableData.filter(({year} : any) => year == data) 
      this.viewTable.regenerateTable(tableData)
    }
  }

  addCML() {
    this.dialogService.open(AddCMLComponent, {
      context: {
        dialogData : {
          title: 'Add CML',
        }
      },
    })
    .onClose  
    .subscribe(newData => {
      if(newData) {
        newData = this.reconstructCMLData(newData),
        this.cmlService.addCML(newData)
        .subscribe(
          () => this.ngOnInit(),
          () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
          () => this.toastrService.success('Data has been added.', 'Your request success.')
        )
      }
    });
  }

  updateCML(data) {
    this.dialogService.open(AddCMLComponent, {
      context: {
        dialogData : {
          title: 'Update CML',
          data : {
            ...data,
            last_thickness_reading_date : new Date(data.last_thickness_reading_date)
          }
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(newData) {
        newData = {
          ...this.reconstructCMLData(newData),
          id : data.id,
        }
        
        this.cmlService.updateCML(newData)
        .subscribe(
          () => this.ngOnInit(),
          () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
          () => this.toastrService.success('Data has been added.', 'Your request success.')
        )
      }
    });
  }

  reconstructCMLData(newData) {
    return {
      ...newData,
      piping_id : this.piping.id,
      last_thickness_reading_date :
      this.datePipe.transform(newData.last_thickness_reading_date, "yyyy-MM-dd"),
      year : new Date(newData.last_thickness_reading_date).getFullYear()
    }
  }

  deleteCML(data) {
    this.dialogService.open(DeleteDialogComponent, {
      context: {
        dialogData : {
          title: 'Add CML',
          name : data.cml_id,
          id : data.id
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(newData) {
        this.cmlService.deleteCML(newData.id)
        .subscribe(
          () => this.ngOnInit(),
          () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
          () => this.toastrService.success('Data has been deleted.', 'Your request success.')
        )
      }
    });
  }
}
