import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {Info} from '../Models/info';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class BabyinfoService extends BaseService {

    private url = '/baby-infos';

    private infos: Info[];

    constructor(public http: RestApiService) {
        super();
    }

    public setInfos(infos): void {
        this.infos = infos;
    }

    public getLabelByKey(key): any {
        return this.infos.reduce((arr, item) => {
            arr.push(item[key]);
            return arr;
        }, []);
    }

    public fetch(): Observable<Info[]> {
        return this.http.get<Info[]>(this.url)
            .pipe(
                map(res => {
                    return res.map(item => new Info(item));
                })
            );
    }
}
