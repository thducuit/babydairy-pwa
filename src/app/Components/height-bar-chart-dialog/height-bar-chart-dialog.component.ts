import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';

@Component({
    selector: 'app-height-bar-chart-dialog',
    templateUrl: './height-bar-chart-dialog.component.html',
    styleUrls: ['./height-bar-chart-dialog.component.css']
})
export class HeightBarChartDialogComponent implements OnInit {

    public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: {xAxes: [{}], yAxes: [{}]},
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartLabels: Label[] = ['1', '2', '3', '4'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];

    public barChartData: ChartDataSets[] = [
        {
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            barThickness: 10,
            data: [44, 59, 80, 81],
            label: 'cm'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

}
