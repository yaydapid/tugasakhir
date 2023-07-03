import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
  selector: 'ngx-thickness-chart',
  template : '<canvas id="Thickness">'
})
export class ThicknessChartComponent extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Thickness vs Year", 
      yTitle : 'Thickness (mm)', 
      xTitle : 'Year'
    })
  }

  ngOnInit(): void {
    this.generateChart('Thickness')
  }
}