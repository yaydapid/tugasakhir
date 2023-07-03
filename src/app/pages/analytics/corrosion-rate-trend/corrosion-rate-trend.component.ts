import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart,  registerables} from 'chart.js'
import { PipingAssetsService } from '../../dashboard/piping-assets/piping-assets.service';
Chart.register(...registerables);

@Component({
  selector: 'ngx-corrosion-rate-trend',
  templateUrl: './corrosion-rate-trend.component.html',
})
export class CorrosionRateTrendComponent implements OnInit {
  constructor(
    private pipingAssetsService : PipingAssetsService 
  ) {}

  ngOnInit(): void {
    this.pipingAssetsService.getPipingAssets()
    .subscribe(({data} : any) => {
      this.selectionData = data[0]?.piping_id;
      this.tableData = data
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  selectionData = 1;
  tableData : any[] = [];

  dataSource 
  displayedColumns: string[] = [ 'piping_id' ];
  selection = new SelectionModel(true, []);
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
  }

  showData(element) {
      this.selectionData = element?.piping_id
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
  }
}


