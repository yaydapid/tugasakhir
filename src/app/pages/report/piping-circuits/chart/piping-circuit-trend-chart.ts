import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
  selector: 'ngx-piping-circuit-chart',
  template : '<canvas id="piping_circuit_chart">'
})
export class PipingCircuitChart extends ChartsComponent {
    constructor() {
        super()
        this.defineOptions({
          chartTitle : "Chart Piping Circuit", 
        })
    }
    
    public chartType: any = 'bar'; 
    public yLabels: any[] = [];
    public legendPosition = 'bottom';
    public showRightSclae: any = true;
    public datasets: any = [ ]
    
    ngOnInit(): void {
        this.generateChart('piping_circuit_chart')
    }
}