import {Injectable} from '@angular/core';
import Dexie from 'dexie';


@Injectable({
    providedIn: 'root'
})
export class DbLocalService {

    private db: any;
    private version = 1;
    private dbName = 'babydairy_local_db';

    constructor() {
        this.createDatabase();
    }

    private createDatabase(): void {
        this.db = new Dexie(this.dbName);
        this.db.version(this.version).stores({
            consumers: '++id, capacity, no, unit, is_empty, version, date, time, created, updated',
            producers: '++id, capacity, no, unit, version, date, time, created, updated',
            babyinfos: '++id, weight, height, month, week, created, updated, version'
        });
    }

    public async clear<T>(tableName: string): Promise<T> {
        return await this.db.table(tableName).clear();
    }

    public async fetch<T>(tableName: string): Promise<T> {
        return await this.db.table(tableName).toArray();
    }

    public async findByOne<T>(tableName: string, key: string, value: string | number): Promise<T> {
        return await this.db.table(tableName).where(key).equals(value).first();
    }

    public async add<T>(tableName: string, params: {}): Promise<T> {
        return await this.db.table(tableName).add(params);
    }

    public async addByBulk<T>(tableName: string, params: {}): Promise<T> {
        return await this.db.table(tableName).bulkAdd(params);
    }

    public async update<T>(tableName: string, params: {}): Promise<T> {
        return await this.db.table(tableName).put(params);
    }

    public async delete<T>(tableName: string, id: number): Promise<T> {
        return await this.db.table(tableName).delete(id);
    }
}

