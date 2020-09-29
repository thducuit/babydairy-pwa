import {Injectable} from '@angular/core';
import {Store} from './store';
import {Info} from '../Models/info';
import {BabyInfosState} from '../States/baby-infos.state';

@Injectable()
export class BabyInfosStore extends Store<BabyInfosState> {
    constructor() {
        super(new BabyInfosState());
    }

    updateBabyInfosToStore(infos: Info[]): void {
        this.setState({
            ...this.state,
            infos
        });
    }
}
