import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
    selector: 'ngx-corrosionR-chart',
    template : '<canvas id="CorrosionR">'
})
export class CorrosionRChartComponent extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Corrosion Rate vs Year", 
      yTitle : 'CR', 
      xTitle : 'Piping'
    })
  }

  ngOnInit(): void {
    this.generateChart('CorrosionR')
  }
}