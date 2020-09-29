import {Injectable} from '@angular/core';
import {Info, InfoConstant} from '../Models/info';


@Injectable()
export class GeneralService {

    private infos: Info[] = [];

    constructor() {
    }

    public setInfos(infos = []): GeneralService {
        this.infos = infos;
        return this;
    }

    public getInfos(): Info[] {
        return this.infos.filter(info => info.version !== InfoConstant.DELETE);
    }

    public getById(id: number): Info {
        return this.infos.find(item => {
            return item.id === id;
        });
    }

    public getLabelByKey(key): any {
        return this.infos.reduce((arr, item) => {
            arr.push(item[key]);
            return arr;
        }, []);
    }
}
