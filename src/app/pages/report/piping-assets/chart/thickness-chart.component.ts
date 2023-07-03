import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
  selector: 'ngx-dashboard-thickness-chart',
  template : '<canvas id="DashboardThickness">'
})
export class DashboardThicknessChart extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Thickness vs Year", 
      yTitle : 'Thickness (mm)', 
      xTitle : 'Year'
    })
  }

  ngOnInit(): void {
    this.generateChart('DashboardThickness')
  }
}