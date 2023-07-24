import { Component, OnInit } from "@angular/core";
import { Chart,  registerables} from 'chart.js'
Chart.register(...registerables);

@Component({
    template : ""
})
export class ChartsComponent implements OnInit {
    constructor() {}
    public chartType :any = 'line';
    public datasets : any = []

    public yLabels : any[] = []
    public chartId : any
    defineOptions({chartTitle = '', yTitle = '', xTitle = ''}) {
        let delayed;
        this.options = {
            animation: {
                onComplete: () => {
                  delayed = true;
                },
                delay: (context) => {
                  let delay = 0;
                  if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                  }
                  return delay;
                },
            },
            responsive: true,
            plugins: {
                    legend: {
                    position : this.legendPosition
                    },
                    title: {
                        display: true,
                        text: chartTitle,
                        color: '#191',
                    },
                },
            scales: {
                A : {
                    display: true,
                    position : 'left',
                    id : 'A',
                    title: {
                        display: true,
                        text: yTitle,
                        font: {
                            family: 'Times',
                            style: 'normal',
                            lineHeight: 1.2
                        },
                        padding: {top: 0, bottom: 10}
                    }
                },
                B : {
                        display: this.showRightSclae,
                        position : 'right',
                        id : 'A',
                        title: {
                            display: true,
                            text: 'mm/Year',
                            font: {
                                family: 'Times',
                                style: 'normal',
                                lineHeight: 1.2
                            },
                            padding: {top: 0, bottom: 10}
                        }
                    },
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: xTitle,
                        font: {
                            family: 'Times',
                            style: 'normal',
                            lineHeight: 1.2
                        },
                        padding: {top: 0, bottom: 10}
                    }
                }
            } 
        }
    }

    generateChart(id) {
        this.data = {
            labels: this.yLabels, 
            datasets: this.datasets
        }
        
        this.chart = new Chart(id, {
            type: this.chartType,
            data: this.data,
            options : this.options
        });
    }

    public options : any;
    public chart;
    public data : any 
    public legendPosition : any = 'right';
    public showRightSclae : any = false;

    ngOnInit(): void {}
}