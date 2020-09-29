import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {Info, InfoConstant, InfoLocalDto, InfoDto} from '../Models/info';
import {forkJoin, from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DbLocalService} from '../db-local.service';
import {switchMap} from 'rxjs/internal/operators';

export interface InfoCreateData {
    id?: number;
    week: number;
    month: number;
    height: number;
    weight: number;
}

export interface InfoUpdateData {
    id?: number;
    week: number;
    month: number;
    height: number;
    weight: number;
}

@Injectable()
export class BabyinfoService extends BaseService {

    private url = '/baby-infos';

    private table = 'babyinfos';

    private infos: Info[];

    private lastKey: number;

    constructor(private http: RestApiService,
                private db: DbLocalService) {
        super();
    }

    public setInfos(infos): BabyinfoService {
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

    public addInfo(newInfo: Info): BabyinfoService {
        this.infos.push(newInfo);
        return this;
    }

    public updateInfo(updatedInfo: Info): BabyinfoService {
        this.infos = this.infos.map(info => {
            if (info.id === updatedInfo.id) {
                info = updatedInfo;
            }
            return info;
        });
        return this;
    }

    public deleteInfo(selectedId: number): BabyinfoService {
        this.infos = this.infos.filter(con => {
            if (con.id !== selectedId) {
                return con;
            }
        });
        return this;
    }

    public isCreatedByLocal(info: Info | InfoLocalDto): boolean {
        return info.version === InfoConstant.NEW_FROM_LOCAL;
    }

    public updateToLocalDb(action: string = 'fetch', item: Info | number = null): void {
        switch (action) {
            case 'add':
                if (item) {
                    if (typeof item === 'object') {
                        item.version = InfoConstant.NEW_FROM_API;
                    }
                    this.db.add(this.table, new InfoLocalDto(item)).then(res => {
                        this.lastKey = +res;
                    });
                }
                break;
            case 'edit':
                if (item) {
                    this.db.update(this.table, new InfoLocalDto(item)).then(res => {
                        this.lastKey = +res;
                    });
                }
                break;
            case 'delete':
                if (item) {
                    this.db.delete(this.table, +item).then(() => {
                        this.lastKey = this.infos[this.infos.length - 1].id;
                    });
                }
                break;
            default:
                const infoDtos = this.infos.map(info => {
                    const inf = new InfoLocalDto(info);
                    inf.version = InfoConstant.NEW_FROM_API;
                    return inf;
                });
                this.db.clear(this.table).then(() => {
                    this.db.addByBulk<InfoLocalDto[]>(this.table, infoDtos).then(res => {
                        this.lastKey = +res;
                    });
                });
        }
    }

    // API
    public fetch(): Observable<Info[]> {
        return this.http.get<Info[]>(this.url)
            .pipe(
                map(res => {
                    return res.map(item => new Info(item));
                })
            );
    }

    public create(data: InfoCreateData): Observable<Info> {
        return this.http.post<Info>(this.url, new InfoDto(data))
            .pipe(
                map(res => new Info(res))
            );
    }

    public bulkCreate(data: InfoCreateData[]): Observable<Info> {
        return this.http.post<Info>(this.url, data);
    }

    public update(data: InfoUpdateData): Observable<Info> {
        return this.http.put<Info>(this.url.concat(`/${data.id}`), new InfoDto(data))
            .pipe(
                map(res => new Info(res))
            );
    }

    public bulkUpdate(data: InfoUpdateData[]): Observable<Info> {
        return this.http.put<Info>(this.url, data);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.url.concat(`/${id}`));
    }

    public bulkDelete(ids: number[]): Observable<any> {
        return this.http.delete<any>(this.url, ids);
    }

    public syncToOnline(): Observable<any> {
        const newInfos = this.infos.filter(con => con.version === InfoConstant.NEW_FROM_LOCAL).map(con => new InfoDto(con));
        const updatedInfos = this.infos.filter(con => con.version === InfoConstant.UPDATE).map(con => new InfoDto(con));
        const deletedIds = this.infos.filter(con => con.version === InfoConstant.DELETE).map(con => con.id);

        const tasks$ = [];
        if (newInfos.length) {
            tasks$.push(this.bulkCreate(newInfos));
        }

        if (updatedInfos.length) {
            tasks$.push(this.bulkUpdate(updatedInfos));
        }

        if (deletedIds.length) {
            tasks$.push(this.bulkDelete(deletedIds));
        }
        return forkJoin(tasks$);
    }

    // Local
    public fetchFromIndexedDb(): Observable<Info[]> {
        return from(this.db.fetch<Info[]>(this.table)).pipe(
            map(res => {
                return res.map(item => new Info(item));
            })
        );
    }

    public getFromIndexedDb(key: string, value: string | number): Observable<Info> {
        return from(this.db.findByOne<Info>(this.table, key, value))
            .pipe(
                map(res => new Info(res))
            );
    }

    public createToIndexedDb(data: InfoCreateData): Observable<Info> {
        return from(this.db.add<Info>(this.table, new InfoLocalDto(data)))
            .pipe(
                switchMap(term => {
                    return this.getFromIndexedDb('id', +term);
                })
            );
    }

    public updateToIndexedDb(data: InfoUpdateData): Observable<Info> {
        const con = new InfoLocalDto(data);
        return from(this.db.update<Info>(this.table, con))
            .pipe(
                switchMap(term => {
                    return this.getFromIndexedDb('id', +term);
                })
            );
    }

    public deleteFromIndexedDb(id: number): Observable<any> {
        return from(this.db.delete<Info>(this.table, id));
    }
}
