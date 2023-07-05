import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart,  registerables} from 'chart.js'
import { ThicknessService } from '../../assesment/thickness/thickness-service';
import { Variables } from '../../../component/common-variable';
import { ThicknessChartComponent } from './chart/thickness-chart.component';
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
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(ThicknessChartComponent) thicknessChart : ThicknessChartComponent

  showData(element) {
      this.selectionData = element
      this.variables.removeChartData(this.thicknessChart)
      this.thicknessChartData(this.thicknessChart, element)
  }

  thicknessChartData(chart, asset) {
    let allYear = asset.cml.map(c => c.year)
    allYear = allYear.filter((c, i) => allYear.indexOf(c) == i).sort((a,b) => a-b)

    const thickness = allYear.map(year => {
      const { reading, lt_cr, cml_details } = this.variables.getAverageCML(asset, year);
      const { min_required_thickness } = this.variables.getAssetsFormula(asset);
      const remaining_life = lt_cr ? (reading - min_required_thickness) / lt_cr : 0;
      return { year, reading, lt_cr, remaining_life, cml_details }
    })

    console.log(thickness)

    chart.data.labels = allYear
    chart.chart.data.datasets = thickness.map(corr => {
      const { cml_details : {cml_id} } = corr
      return {
          label: cml_id,
          yAxisID: 'A',
          data: [ 167, 200, '572', '79', '92'],
          backgroundColor: 'transparent',
          borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
      }
    })
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


