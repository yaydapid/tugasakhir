import { Component, OnInit } from "@angular/core";
import { Chart,  registerables} from 'chart.js'
Chart.register(...registerables);

@Component({
    template : ""
})
export class ChartsComponent implements OnInit {
    constructor() {

    }

    public chartType :any = 'line';
    public datasets : any = [
        {
            label: "CML 1A",
            yAxisID: 'A',
            data: ['467', '576', '572', '79', '92'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,0,0,.5)',
        },
        {
            label: "CML 1B",
            yAxisID: 'A',
            data: ['542', '542', '536', '327', '17'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(100,100,0,.5)',
        },
        {
            label: "CML 1C",
            yAxisID: 'A',
            data: ['504', '142', '336', '317', '100'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(10,50,100,.5)',
        },
        {
            label: "CML 1D",
            yAxisID: 'A',
            data: ['52', '42', '336', '527', '517'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(90,190,90,.5)',
        },
        {
            label: "CML 1E",
            yAxisID: 'A',
            data: ['50', '402', '336', '427', '217'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(190,190,10,.5)',
        },
        {
            label: "CML 1F",
            yAxisID: 'A',
            data: ['92', '342', '536', '227', '117'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(200,200,20,.5)',
        },
        {
            label: "CML 1G",
            yAxisID: 'A',
            data: ['52', '242', '436', '327', '217'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(20,150,200,.5)',
        }  
    ]

    public yLabels : any[] = ['2020', '2021', '2022', '2023', '2024']

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
                            text: yTitle,
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

    ngOnInit(): void {  }
}