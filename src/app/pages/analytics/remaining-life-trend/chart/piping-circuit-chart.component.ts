import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
    selector: 'ngx-pipingCircuitChart-chart',
    template : '<canvas id="pipingCircuitChart">'
})
export class PipingCircuitChartComponent extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Chart Piping Circuit", 
      yTitle : 'mm', 
      xTitle : 'Pipe'
    })
  }

  public chartType: any = 'bar'; 
  public yLabels: any[] = [];
  public legendPosition = 'bottom';
  public showRightSclae: any = true;
  public datasets: any = [ ]

  ngOnInit(): void {
    this.generateChart('pipingCircuitChart')
  }
}