import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Consumer, ConsumerDto} from '../Models/consumer';
import {RestApiService} from '../rest-api.service';
import {map} from 'rxjs/operators';


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

    private consumers: Consumer[];

    constructor(public http: RestApiService) {
        super();
    }

    public setConsumers(consumers): void {
        this.consumers = consumers;
    }

    public getConsumerByDate(date: Date = null): Consumer[] {
        date = date || new Date();
        return this.consumers.filter(consumer => {
            return consumer.isDateEqual(date);
        });
    }

    public addConsumer(newConsumer: Consumer): void {
        this.consumers.push(newConsumer);
    }

    public updateConsumer(updatedConsumer: Consumer): void {
        this.consumers = this.consumers.map(consumer => {
            if (consumer.id === updatedConsumer.id) {
                consumer = updatedConsumer;
            }
            return consumer;
        });
    }

    public deleteConsumer(selectedId: number): void {
        this.consumers = this.consumers.filter(con => {
            if (con.id !== selectedId) {
                return con;
            }
        });
    }

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

    public update(data: ConsumerUpdateData): Observable<Consumer> {
        return this.http.put<Consumer>(this.url.concat(`/${data.id}`), new ConsumerDto(data))
            .pipe(
                map(res => new Consumer(res))
            );
    }

    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.url.concat(`/${id}`));
    }
}
