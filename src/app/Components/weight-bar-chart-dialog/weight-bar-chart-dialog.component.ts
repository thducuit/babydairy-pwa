import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';

@Component({
    selector: 'app-weight-bar-chart-dialog',
    templateUrl: './weight-bar-chart-dialog.component.html',
    styleUrls: ['./weight-bar-chart-dialog.component.css']
})
export class WeightBarChartDialogComponent implements OnInit {

    private BarChartLabels: Label[];

    @Input() set chartLabels(value: Label[]) {
        this.BarChartLabels = value;
    }

    get chartLabels(): Label[] {
        return this.BarChartLabels;
    }

    @Input() set chartData(value: number[]) {
        if (this.barChartData.length && value) {
            this.barChartData[0].data = value;
        }
    }

    public barChartOptions: ChartOptions = {
        responsive: true,
        scales: {xAxes: [{}], yAxes: [{}]},
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    // public barChartLabels: Label[] = ['1', '2', '3', '4'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];

    public barChartData: ChartDataSets[] = [
        {
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            barThickness: 10,
            data: [3.3, 4.6, 5.7, 8],
            label: 'kg'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
