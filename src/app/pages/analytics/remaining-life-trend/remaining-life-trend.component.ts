import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PipingCircuitService } from '../../dashboard/piping-circuits/piping-circuits.service';
import { Variables } from '../../../component/common-variable';
import { PipingCircuitChartComponent } from './chart/piping-circuit-chart.component';

@Component({
  selector: 'ngx-remaining-life-trend',
  templateUrl: './remaining-life-trend.component.html',
})
export class RemainingLifeTrendComponent implements OnInit {
  
  constructor(
    private circuitService : PipingCircuitService,
    private variables : Variables
  ) {}

  @ViewChild(PipingCircuitChartComponent) circuitChart : PipingCircuitChartComponent

  public datasets: any = [
    {
        label: "Reading (mm)",
        yAxisID: 'A',
        prop : 'reading'
    },
    {
        label: "T minimum (mm)",
        yAxisID: 'A',
        prop : 'min_required_thickness'
    },
    {
        label: "Nominal Thickness (mm)",
        yAxisID: 'A',
        prop : 'nominal_thickness'
    },
    {
        label: "Corrosion Rate (mm/Year)",
        yAxisID: 'B',
        prop : 'lt_cr'
    },
  ]

  ngOnInit(): void {
    this.circuitService.getPipingCircuits()
    .subscribe(({data} : any) => {
      this.selectionData = data[0];
      this.showData(this.selectionData)
      this.tableData = data

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  selectionData;
  tableData : any[] = [];
  dataSource 
  displayedColumns: string[] = [ 'piping_circuit_id' ];
  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  showData(element) {
      this.selectionData = element;
      this.circuitChartData(this.circuitChart, element)
  }

  circuitChartData(chart, circuit) {
    const { piping } = circuit
    const allPipe = piping?.map(c=>c.piping_id)
    this.variables.removeChartData(this.circuitChart)

    const pipingCalc = piping.map(p => this.variables.getThicknessCalculation(p)) 

    chart.data.labels = allPipe
    const dataSet =
    this.datasets
    .map(item => {
      const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
      const data = allPipe.map(pipe=>pipingCalc.find(p=>p.piping_id == pipe)[item.prop])
      return {
        ...item,
        borderColor : color,
        backgroundColor : color,
        data
      }
    })
    chart.chart.data.datasets = dataSet
    chart.chart.update();
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
