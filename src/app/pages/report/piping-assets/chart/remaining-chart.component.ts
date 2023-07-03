import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
  selector: 'ngx-dashboard-remaining-chart',
  template : '<canvas id="DashboardRemaining">'
})
export class DashboardRemainingChart extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Remaining Life vs Year", 
      yTitle : 'Remaining Life (years)', 
      xTitle : 'Year'
    })
  }

  ngOnInit(): void {
    this.generateChart('DashboardRemaining')
  }
}