import {Component, OnInit} from '@angular/core';
import {BabyinfoService} from '../../Services/babyinfo.service';

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

    public heightLabels: [];
    public heightValues: [];

    public weightLabels: [];
    public weightValues: [];

    constructor(private babyinfoService: BabyinfoService) {
    }

    ngOnInit(): void {
        this.fetch();
    }

    private fetch(): void {
        this.babyinfoService.fetch().subscribe(res => {
            this.babyinfoService.setInfos(res);
            this.updateLabelChart();
            this.updateHeightValueChart();
            this.updateWeightValueChart();
        });
    }

    private updateLabelChart(): void {
        this.heightLabels = this.weightLabels = this.babyinfoService.getLabelByKey('month');
    }

    private updateHeightValueChart(): void {
        this.heightValues = this.babyinfoService.getLabelByKey('height');
    }

    private updateWeightValueChart(): void {
        this.weightValues = this.babyinfoService.getLabelByKey('weight');
    }

}
