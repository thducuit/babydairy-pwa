import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Producer, ProducerDto} from '../Models/producer';
import {RestApiService} from '../rest-api.service';
import {map} from 'rxjs/operators';


export interface ProducerCreateData {
    id?: number;
    capacity: number;
    unit: string;
}

export interface ProducerUpdateData {
    id: number;
    capacity: number;
}

@Injectable()
export class ProducerService extends BaseService {

    private url = '/producers';

    private producers: Producer[];

    constructor(public http: RestApiService) {
        super();
    }

    public setProducers(producers): void {
        this.producers = producers;
    }

    public getProducerByDate(date: Date = null): Producer[] {
        date = date || new Date();
        return this.producers.filter(producer => {
            return producer.isDateEqual(date);
        });
    }

    public addProducer(newProducer: Producer): void {
        this.producers.push(newProducer);
    }

    public updateProducer(updatedProducer: Producer): void {
        this.producers = this.producers.map(producer => {
            if (producer.id === updatedProducer.id) {
                producer = updatedProducer;
            }
            return producer;
        });
    }

    public deleteProducer(selectedId: number): void {
        this.producers = this.producers.filter(con => {
            if (con.id !== selectedId) {
                return con;
            }
        });
    }

    public fetch(): Observable<Producer[]> {
        return this.http.get<Producer[]>(this.url)
            .pipe(
                map(res => {
                    return res.map(item => new Producer(item));
                })
            );
    }

    public create(data: ProducerCreateData): Observable<Producer> {
        return this.http.post<Producer>(this.url, new ProducerDto(data))
            .pipe(
                map(res => new Producer(res))
            );
    }

    public update(data: ProducerUpdateData): Observable<Producer> {
        return this.http.put<Producer>(this.url.concat(`/${data.id}`), new ProducerDto(data))
            .pipe(
                map(res => new Producer(res))
            );
    }

    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.url.concat(`/${id}`));
    }
}
