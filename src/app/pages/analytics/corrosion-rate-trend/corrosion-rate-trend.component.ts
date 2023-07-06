import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables} from 'chart.js'
import { ThicknessService } from '../../assesment/thickness/thickness-service';
import { Variables } from '../../../component/common-variable';
import { ThicknessChartComponent } from './chart/thickness-chart.component';
import { CorrosionRChartComponent } from './chart/corrosionR-chart.component';
import { RemainingChartComponent } from './chart/remaining-chart.component';
Chart.register(...registerables);

@Component({
  selector: 'ngx-corrosion-rate-trend',
  templateUrl: './corrosion-rate-trend.component.html',
})
export class CorrosionRateTrendComponent implements OnInit {
  constructor(
    private thicknessService : ThicknessService,
    private variables : Variables
  ) {}

  ngOnInit(): void {
    this.thicknessService.getDataThickness()
    .subscribe(({data} : any) => {
      this.selectionData = data[0];
      this.tableData = data;
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.showData(this.selectionData)
    })
  }

  selectionData;
  tableData : any[] = [];

  dataSource 
  displayedColumns: string[] = [ 'piping_id' ];
  selection = new SelectionModel(true, []);
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(ThicknessChartComponent) thicknessChart : ThicknessChartComponent
  @ViewChild(CorrosionRChartComponent) corrosionChart : CorrosionRChartComponent
  @ViewChild(RemainingChartComponent) remainingChart : RemainingChartComponent

  showData(element) {
      this.selectionData = element
      this.variables.removeChartData(this.thicknessChart)
      this.variables.removeChartData(this.corrosionChart)
      this.variables.removeChartData(this.remainingChart)

      if(!element) return;
      this.thicknessChartData(this.thicknessChart, element)
      this.corrosionChartData(this.corrosionChart, element)
      this.remainingLifeChartData(this.remainingChart, element)
  }

  filterByClass(val) {
    let tableData = this.tableData.filter(item => item.class == val)
    if(val == "All") tableData = this.tableData
    this.dataSource = new MatTableDataSource(tableData)
  }

  thicknessChartData(chart, {cml}) {
    const {datasets, allYear} = this.variables.getCharCML(cml ?? [], "last_thickness_reading")
    chart.data.labels = allYear
    chart.chart.data.datasets = datasets
    chart.chart.update();
  } 

  corrosionChartData(chart, asset) {
    const cml = this.variables.getCMLCalc(asset)
    const {datasets, allYear} = this.variables.getCharCML(cml, "lt_cr")
    chart.data.labels = allYear
    chart.chart.data.datasets = datasets
    chart.chart.update();
  }

  remainingLifeChartData(chart, asset) {
    const cml = this.variables.getCMLCalc(asset)
    const {datasets, allYear} = this.variables.getCharCML(cml, "remaining_life")
    chart.data.labels = allYear
    chart.chart.data.datasets = datasets
    chart.chart.update();
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


