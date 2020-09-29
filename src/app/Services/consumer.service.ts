import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {Observable, from, forkJoin} from 'rxjs';
import {Consumer, ConsumerConstant, ConsumerDto, ConsumerLocalDto} from '../Models/consumer';
import {RestApiService} from '../rest-api.service';
import {map} from 'rxjs/operators';
import {DbLocalService} from '../db-local.service';
import {switchMap} from 'rxjs/internal/operators';


export interface ConsumerCreateData {
    id?: number;
    capacity: number;
    unit: string;
}

export interface ConsumerUpdateData {
    id: number;
    capacity: number;
}

@Injectable()
export class ConsumerService extends BaseService {

    private url = '/consumers';

    private table = 'consumers';

    private consumers: Consumer[];

    private lastKey: number;

    constructor(private http: RestApiService,
                private db: DbLocalService) {
        super();
    }

    public setConsumers(consumers): ConsumerService {
        this.consumers = consumers;
        return this;
    }

    public getConsumers(): Consumer[] {
        return this.consumers;
    }

    public getById(id: number): Consumer {
        return this.consumers.find(item => {
            return item.id === id;
        });
    }

    public getConsumerByDate(date: Date = null): Consumer[] {
        date = date || new Date();
        return this.consumers.filter(consumer => {
            return consumer.isDateEqual(date) && consumer.version !== ConsumerConstant.DELETE;
        });
    }

    public addConsumer(newConsumer: Consumer): ConsumerService {
        this.consumers.push(newConsumer);
        return this;
    }

    public updateConsumer(updatedConsumer: Consumer): ConsumerService {
        this.consumers = this.consumers.map(consumer => {
            if (consumer.id === updatedConsumer.id) {
                consumer = updatedConsumer;
            }
            return consumer;
        });
        return this;
    }

    public deleteConsumer(selectedId: number): ConsumerService {
        this.consumers = this.consumers.filter(con => {
            if (con.id !== selectedId) {
                return con;
            }
        });
        return this;
    }

    public updateToLocalDb(action: string = 'fetch', item: Consumer | number = null): void {
        switch (action) {
            case 'add':
                if (item) {
                    if (typeof item === 'object') {
                        item.version = ConsumerConstant.NEW_FROM_API;
                    }
                    this.db.add(this.table, new ConsumerLocalDto(item)).then(res => {
                        this.lastKey = +res;
                    });
                }
                break;
            case 'edit':
                if (item) {
                    this.db.update(this.table, new ConsumerLocalDto(item)).then(res => {
                        this.lastKey = +res;
                    });
                }
                break;
            case 'delete':
                if (item) {
                    this.db.delete(this.table, +item).then(() => {
                        this.lastKey = this.consumers[this.consumers.length - 1].id;
                    });
                }
                break;
            default:
                const consumerDtos = this.consumers.map(consumer => {
                    const con = new ConsumerLocalDto(consumer);
                    con.version = ConsumerConstant.NEW_FROM_API;
                    return con;
                });
                this.db.clear(this.table).then(() => {
                    this.db.addByBulk<ConsumerLocalDto[]>(this.table, consumerDtos).then(res => {
                        this.lastKey = +res;
                    });
                });
        }
    }

    public isCreatedByLocal(consumer: Consumer | ConsumerLocalDto): boolean {
        return consumer.version === ConsumerConstant.NEW_FROM_LOCAL;
    }

    // API
    public fetch(): Observable<Consumer[]> {
        return this.http.get<Consumer[]>(this.url)
            .pipe(
                map(res => {
                    return res.map(item => new Consumer(item));
                })
            );
    }

    public create(data: ConsumerCreateData): Observable<Consumer> {
        return this.http.post<Consumer>(this.url, new ConsumerDto(data))
            .pipe(
                map(res => new Consumer(res))
            );
    }

    public bulkCreate(data: ConsumerCreateData[]): Observable<Consumer> {
        return this.http.post<Consumer>(this.url, data);
    }

    public update(data: ConsumerUpdateData): Observable<Consumer> {
        return this.http.put<Consumer>(this.url.concat(`/${data.id}`), new ConsumerDto(data))
            .pipe(
                map(res => new Consumer(res))
            );
    }

    public bulkUpdate(data: ConsumerUpdateData[]): Observable<Consumer> {
        return this.http.put<Consumer>(this.url, data);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.url.concat(`/${id}`));
    }

    public bulkDelete(ids: number[]): Observable<any> {
        return this.http.delete<any>(this.url, ids);
    }

    public syncToOnline(): Observable<any> {
        const newConsumers = this.consumers.filter(con => con.version === ConsumerConstant.NEW_FROM_LOCAL).map(con => new ConsumerDto(con));
        const updatedConsumers = this.consumers.filter(con => con.version === ConsumerConstant.UPDATE).map(con => new ConsumerDto(con));
        const deletedIds = this.consumers.filter(con => con.version === ConsumerConstant.DELETE).map(con => con.id);

        const tasks$ = [];
        if (newConsumers.length) {
            tasks$.push(this.bulkCreate(newConsumers));
        }

        if (updatedConsumers.length) {
            tasks$.push(this.bulkUpdate(updatedConsumers));
        }

        if (deletedIds.length) {
            tasks$.push(this.bulkDelete(deletedIds));
        }
        return forkJoin(tasks$);
    }

    // Local
    public fetchFromIndexedDb(): Observable<Consumer[]> {
        return from(this.db.fetch<Consumer[]>(this.table)).pipe(
            map(res => {
                return res.map(item => new Consumer(item));
            })
        );
    }

    public getFromIndexedDb(key: string, value: string | number): Observable<Consumer> {
        return from(this.db.findByOne<Consumer>(this.table, key, value))
            .pipe(
                map(res => new Consumer(res))
            );
    }

    public createToIndexedDb(data: ConsumerCreateData): Observable<Consumer> {
        return from(this.db.add<Consumer>(this.table, new ConsumerLocalDto(data)))
            .pipe(
                switchMap(term => {
                    return this.getFromIndexedDb('id', +term);
                })
            );
    }

    public updateToIndexedDb(data: ConsumerUpdateData): Observable<Consumer> {
        const con = new ConsumerLocalDto(data);
        return from(this.db.update<Consumer>(this.table, con))
            .pipe(
                switchMap(term => {
                    return this.getFromIndexedDb('id', +term);
                })
            );
    }

    public deleteFromIndexedDb(id: number): Observable<any> {
        return from(this.db.delete<Consumer>(this.table, id));
    }
}
