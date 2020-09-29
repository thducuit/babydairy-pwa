import {Component, OnInit} from '@angular/core';
import {OnlineOfflineService} from '../../Services/online-offline.service';
import {BabyInfosStore} from '../../Stores/baby-infos.store';
import {GeneralService} from '../../Services/general.service';

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

    constructor(private generalService: GeneralService,
                private babyinfoStore: BabyInfosStore,
                private onlineOfflineService: OnlineOfflineService) {
        this.registerOnlineOfflineEvents(onlineOfflineService);
    }

    ngOnInit(): void {
        this.fetchBabyInfos();
    }

    private fetchBabyInfos(): void {
        this.babyinfoStore.state$.subscribe(res => {
            this.generalService.setInfos(res.infos);
            this.updateLabel();
        });
    }

    private updateLabel(): void {
        this.updateLabelChart();
        this.updateHeightValueChart();
        this.updateWeightValueChart();
    }

    private updateLabelChart(): void {
        this.heightLabels = this.weightLabels = this.generalService.getLabelByKey('month');
    }

    private updateHeightValueChart(): void {
        this.heightValues = this.generalService.getLabelByKey('height');
    }

    private updateWeightValueChart(): void {
        this.weightValues = this.generalService.getLabelByKey('weight');
    }

    private registerOnlineOfflineEvents(onlineOfflineService: OnlineOfflineService): void {
        onlineOfflineService.connectionChanged.subscribe(online => {
            if (online) {
            } else {
            }
        });
    }

}
