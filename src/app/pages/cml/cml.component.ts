import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CMLService } from './cml.servivce';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddCMLComponent } from './add-cml/add-cml.component';
import { MatTableComponent } from '../../component/mat-table/mat-table.component';
import { DatePipe } from '@angular/common';
import { DeleteDialogComponent } from '../../component/delete dialog/delete-dialog.component';

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
    private toastrService : NbToastrService
  ) { }

  @ViewChild(MatTableComponent) viewTable : MatTableComponent;

  piping
  ngOnInit(): void {
    const paramId = this.activatedroute.snapshot.paramMap.get('id')
    this.cmlService.getCML(paramId)
    .subscribe(({data, piping} : any) => {
      const {min_structural_thickness, min_alert_thickness, min_design_pressure, outside_diameter, 
        longtd_quality_factor, weld_joint_factor, allowable_unit_stress, piping_id,
        coefficient, corrosion_allowance, mechanical_allowance, nominal_thickness} 
        = piping;

      this.piping = piping;
      let years : any = ['All']

      this.tableHeader = { 
        title : piping_id, 
        filter : [
          { name : "Year", value : years, title : 'cml-year' } 
        ]
      }

      const pressure_design_thickness = (min_design_pressure * outside_diameter) 
      / (2 * ((longtd_quality_factor * weld_joint_factor * allowable_unit_stress) + (coefficient * min_design_pressure)))

      this.tableData = data.map(item => {
        const year = this.getYear(item.last_thickness_reading_date)
        if(!years.includes(year)) years.push(year);
        return {
          ...item,
          year,
          nominal_thickness,
          min_required_thickness : (Math.max(
            min_structural_thickness, min_alert_thickness, pressure_design_thickness
            ) + corrosion_allowance + mechanical_allowance).toFixed(3),
        }
      })
      this.viewTable.regenerateTable(this.tableData)
    })
  }

  getYear(date) {
    return new Date(date).getFullYear()
  }

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

  inputDetail = [
    {name : "Gauge Point", prop : "gauge_point"},
    {name : "Point Location", prop : "point_location"},
  ]

  onClickTable(data, title) {
    console.log(data)
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
        const {nominal_thickness, date_in_service} = this.piping
        const year_diff = (this.getYear(newData.last_thickness_reading_date) - this.getYear(date_in_service))
        const calculated_cr = year_diff ==  0 ? '0' : (nominal_thickness - newData.last_thickness_reading) / year_diff
        newData = {
          ...newData,
          piping_id : this.piping.id,
          last_thickness_reading_date :
          this.datePipe.transform(newData.last_thickness_reading_date, "yyyy-MM-dd"),
          calculated_cr
        }
        
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
        const {nominal_thickness, date_in_service} = this.piping
        const year_diff = (this.getYear(newData.last_thickness_reading_date) - this.getYear(date_in_service))
        const calculated_cr = year_diff ==  0 ? '0' : (nominal_thickness - newData.last_thickness_reading) / year_diff
        
        newData = {
          ...newData,
          id : data.id,
          piping_id : this.piping.id,
          last_thickness_reading_date :
          this.datePipe.transform(newData.last_thickness_reading_date, "yyyy-MM-dd"),
          calculated_cr
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
