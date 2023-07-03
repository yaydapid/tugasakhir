import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DamageMechanismService } from './damage-mechanism.service';
import { MatTableComponent } from '../../../component/mat-table/mat-table.component';
import { DatePipe } from '@angular/common';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-demage-mechanism',
  templateUrl: './demage-mechanism.component.html',
})
export class DemageMechanismComponent implements OnInit {
  constructor(
    private damageMechanismService : DamageMechanismService,
    private datePipe : DatePipe,
    private toastrService : NbToastrService
  ) {}

  @ViewChild(MatTableComponent) viewTable : MatTableComponent;

  ngOnInit(): void {
    this.damageMechanismService.getDamageMechanism()
    .subscribe(({data} : any) => {
      this.selectionData = data[0];
      this.regenerateTableData(data[0]?.damage_mechanism)

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  regenerateTableData(damage_mechanism) {
    const tableData = this.tableData.map(item => {
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

  tableData:any[] = [
    { id : "01", piping_damage_mechanism : "General and localized metal loss", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "02", piping_damage_mechanism : "Sulfidation and High Temp. H2S/H2 Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "03", piping_damage_mechanism : "Oxidation", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "04", piping_damage_mechanism : "Microbiologically Induced Corrosion (MIC)", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "05", piping_damage_mechanism : "Naphthenic Acid Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "06", piping_damage_mechanism : "Erosion/Erosison-Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "07", piping_damage_mechanism : "Galvanic Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "08", piping_damage_mechanism : "Atmospheric Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "09", piping_damage_mechanism : "Corrosion Under Insulation (CUI)", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "10", piping_damage_mechanism : "Cooling Water Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "11", piping_damage_mechanism : "Boiler Water Condensate Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "12", piping_damage_mechanism : "Soil Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "13", piping_damage_mechanism : "Ammonium Bisulfide and Chloride Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "14", piping_damage_mechanism : "Carbon Dioxide Corrosion", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "15", piping_damage_mechanism : "Surface Connected Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "16", piping_damage_mechanism : "Mechanical Fatigue Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "17", piping_damage_mechanism : "Caustic Stress Corrosion Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "18", piping_damage_mechanism : "Polythionic Stress Corrosion Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "19", piping_damage_mechanism : "Sulfide Stress Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "20", piping_damage_mechanism : "Chloride Stress Corrosion Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "21", piping_damage_mechanism : "Subsurface Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "22", piping_damage_mechanism : "Hydrogen Induced Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "23", piping_damage_mechanism : "Wet Hydrogen Sulfide Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "24", piping_damage_mechanism : "High-Temperature Micro-fissuring/Micro-void Fromation and Eventual Macro Cracking", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "25", piping_damage_mechanism : "High-temperature Hydrogen Attack", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "26", piping_damage_mechanism : "Creep/Stress Rupture", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "27", piping_damage_mechanism : "Metallurgical Changes", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "28", piping_damage_mechanism : "Graphitization", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "29", piping_damage_mechanism : "Temper Embrittlement", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
    { id : "30", piping_damage_mechanism : "Hydrogen Embrittlement", active :false, notes : "", type_location : "", susceptibility : '', last_insp_date : "",  insp_due_date : "" },
  ]

  columnDetails = [ 
    { type : 'text', prop : 'piping_damage_mechanism', head : 'Piping Damage Mechanism', width : '200px' },
    { type : 'check', prop : 'active', head : 'Active', width : '100px' },
    { type : 'drop-down', prop : 'susceptibility', head : 'Susceptibility', width : '50px', value : [
      "Low", "Medium", "High"
    ]},
    { type : 'editable text', prop : 'notes', head : 'Notes', width : '800px' },
    { type : 'editable text', prop : 'type_location', head : 'Expected Type/Location', width : '200px' },
    { type : 'editable date', prop : 'last_insp_date', head : 'Last Insp.Date', width : '200px' },
    { type : 'editable date', prop : 'insp_due_date', head : 'Insp. Due Date', width : '200px' },
  ]

  selectionData : any;

  dataSource 
  displayedColumns: string[] = [ 'piping_id' ];
  resultsLength = 0;

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

  onClickTable(data, title) {

    // this.regenerateTableData(data)
    // console.log("data",data)
    // console.log("title", title)
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
