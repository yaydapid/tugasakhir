import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
    selector: 'ngx-dashboard-corrosion-chart',
    template : '<canvas id="DashboardCorrosion">'
})
export class DashboardCorrosionRChart extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Corrosion Rate vs Year", 
      yTitle : 'CR', 
      xTitle : 'Piping'
    })
  }

  ngOnInit(): void {
    this.generateChart('DashboardCorrosion')
  }
}