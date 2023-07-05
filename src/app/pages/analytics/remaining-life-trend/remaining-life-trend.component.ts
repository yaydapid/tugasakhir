import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PipingAssetsService } from '../../dashboard/piping-assets/piping-assets.service';

@Component({
  selector: 'ngx-remaining-life-trend',
  templateUrl: './remaining-life-trend.component.html',
})
export class RemainingLifeTrendComponent implements OnInit {
  
  constructor(
    private pipingAssetsService : PipingAssetsService
  ) {}

  ngOnInit(): void {
    this.pipingAssetsService.getPipingAssets()
    .subscribe(({data} : any) => {
      this.selectionData = data[0];
      this.tableData = data
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  selectionData;
  tableData : any[] = [];
  dataSource 
  displayedColumns: string[] = [ 'piping_id' ];
  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  showData(element) {
      this.selectionData = element
  }

  filterByClass(val) {
    let tableData = this.tableData.filter(item => item.class == val)
    if(val == "All") tableData = this.tableData
    this.dataSource = new MatTableDataSource(tableData)
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
  }
}
