import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
    selector: 'ngx-remaining-chart',
    template : '<canvas id="Remaining">'
})
export class RemainingChartComponent extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Remaining Life vs Year", 
      yTitle : 'Remaining Life (years)', 
      xTitle : 'Year'
    })
  }

  ngOnInit(): void {
    this.generateChart('Remaining')
  }
}