import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DamageMechanismService } from './damage-mechanism.service';
import { MatTableComponent } from '../../../component/mat-table/mat-table.component';
import { DatePipe } from '@angular/common';
import { NbToastrService } from '@nebular/theme';
import { Variables } from '../../../component/common-variable';

@Component({
  selector: 'ngx-demage-mechanism',
  templateUrl: './demage-mechanism.component.html',
})
export class DemageMechanismComponent implements OnInit {
  constructor(
    private damageMechanismService : DamageMechanismService,
    private datePipe : DatePipe,
    private toastrService : NbToastrService,
    private variables : Variables
  ) {}

  @ViewChild(MatTableComponent) viewTable : MatTableComponent;

  ngOnInit(): void {
    this.damageMechanismService.getDamageMechanism()
    .subscribe(({data} : any) => {
      this.regenerateTableData(data[0]?.damage_mechanism)
      this.tableData = data.map(item => {
        const { damage_mechanism, piping } = item
        const damageToPoint : any = damage_mechanism 
        ? Object.values(damage_mechanism)
          .map(({susceptibility} : any) => this.variables.damageToPoint(susceptibility))
        : [null]

        const suspec = damageToPoint.reduce((x, y) => x + y, 0) / damageToPoint.length
        return {
          ...item,
          piping_id : piping.piping_id,
          suspec : this.variables.damageToLevel(Math.round(suspec))
        }
      })

      this.selectionData = this.tableData[0];
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  regenerateTableData(damage_mechanism) {
    const tableData = this.variables.damageMechanismName.map(item => {
      const {id} = item;
      if(damage_mechanism?.[id]) { 
        const {last_insp_date, insp_due_date} = damage_mechanism[id]
        return {
          ...item,
          ...damage_mechanism[id],
          active : true,
          last_insp_date : new Date(last_insp_date), 
          insp_due_date : new Date(insp_due_date)
        }
      }
      return {...item}
    })
    this.viewTable.regenerateTable(tableData)
  }

  tableData
  columnDetails = [ 
    { type : 'text', prop : 'piping_damage_mechanism', head : 'Piping Damage Mechanism', width : '800px' },
    { type : 'check', prop : 'active', head : 'Active', width : '200px' },
    { type : 'drop-down', prop : 'susceptibility', head : 'Susceptibility', width : '200px', value : [
      "Low", "Medium", "High"
    ]},
    { type : 'editable text', prop : 'notes', head : 'Notes', width : '200px' },
    { type : 'editable text', prop : 'type_location', head : 'Expected Type/Location', width : '200px' },
    { type : 'editable date', prop : 'last_insp_date', head : 'Last Insp.Date', width : '200px' },
    { type : 'editable date', prop : 'insp_due_date', head : 'Insp. Due Date', width : '200px' },
  ]

  selectionData : any;
  dataSource 
  displayedColumns: string[] = [ 'piping_id' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  onSubmit() {
    const tableData = this.viewTable.getDataSource()["_data"]["_value"]
    const id  = this.selectionData.id

    const updateData = tableData
    .filter(item => item?.active)
    .map(item => ({
      ...item,
      last_insp_date : this.datePipe.transform(item.last_insp_date, 'yyyy-MM-dd'),
      insp_due_date : this.datePipe.transform(item.insp_due_date, 'yyyy-MM-dd')
    }))

    let damage_mechanism : any = {}
    updateData.forEach(({
      id, insp_due_date, last_insp_date, notes, susceptibility, type_location
    } : any) => {
      damage_mechanism[id] = {
        notes, type_location, susceptibility, last_insp_date, insp_due_date
      }
    })

    this.damageMechanismService.updateDamageMechanism(id, {damage_mechanism})
    .subscribe(
      () => this.ngOnInit(),
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
      () => this.toastrService.success('Data has been updated.', 'Your request success.')
    )
  }

  filterBySuspec(val) {
    let tableData;
    if(val == 'No Filter')
    tableData = this.tableData
    if(val != 'No Filter')
    tableData = this.tableData.filter(({suspec}) => suspec == val)
    this.dataSource = new MatTableDataSource(tableData);
  }

  showData(element) {
      this.selectionData = element
      this.regenerateTableData(element?.damage_mechanism)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
