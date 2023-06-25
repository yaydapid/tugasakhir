import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-mat-table',
  templateUrl: './mat-table.component.html',
})
export class MatTableComponent implements OnInit {
  constructor( 
    private router : Router
  ) { }

  ngOnInit(): void { 
    this.displayedColumns = this.columnDetails.map(column => column.prop);
    this.dataSource = new MatTableDataSource(this.tableData)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input() tableHeader;
  @Input() tableFooter = {
    show : true,
    pageSize : 30
  }; 
  @Input() tableData;
  @Input() columnDetails
  displayedColumns: string[]
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output("onClickTable") onClickTable: EventEmitter<any> = new EventEmitter();

  handleClick(data) {
    // console.log(data)
    this.onClickTable.emit(data)
  }
  
  resultsLength = 0;
  selection = new SelectionModel(true, []);
  dataSource

  checked = false;
  toggle(checked: boolean) {
    this.checked = checked;
  }

  navigateTo(nav, element) {
    this.router.navigateByUrl(nav + element.piping_id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
