import {DateHelper} from '../Helper/date.helper';

export enum ConsumerConstant {
    DELETE = -1,
    NEW_FROM_LOCAL = 0,
    NEW_FROM_API = 1,
    UPDATE = 2
}

export class Consumer {
    public id: number;
    public capacity: number;
    public no: number;
    public unit: string;
    public isEmpty: boolean;
    public created: string;
    public updated: string;
    public time: string;
    public date: string;
    public version: number;

    constructor(obj = null) {
        if (obj) {
            this.id = obj.id;
            this.capacity = obj.capacity;
            this.no = obj.no;
            this.version = typeof obj.version === 'number' ? obj.version : ConsumerConstant.NEW_FROM_API;
            this.unit = obj.unit || 'ml';
            this.isEmpty = obj.is_empty === 1;
            this.created = obj.created_at || obj.created;
            this.updated = obj.updated_at || obj.updated;
            this.time = this.created ? DateHelper.dateByFormat(new Date(this.created), 'HH:mm') : '';
        } else {
            this.id = 0;
            this.capacity = 0;
            this.no = 1;
            this.isEmpty = true;
            this.unit = 'ml';
        }
    }

    public isDateEqual(date: Date): boolean {
        return DateHelper.dateByFormat(new Date(this.created), 'MM/DD/YYYY') === DateHelper.dateByFormat(date, 'MM/DD/YYYY');
    }
}

export class ConsumerDto {
    public id: number;
    public capacity: number;
    public no: number;
    public unit: string;
    public is_empty: number;
    public created_at: string;
    public updated_at: string;

    constructor(obj) {
        this.id = obj.id || null;
        this.no = obj.no || 1;
        this.capacity = obj.capacity;
        this.is_empty = obj.isEmpty ? 1 : 0;
        this.created_at = obj.created ? DateHelper.dateByFormat(new Date(obj.created), 'YYYY-MM-DD HH:mm:ss') : '';
        this.updated_at = obj.updated ? DateHelper.dateByFormat(new Date(obj.updated), 'YYYY-MM-DD HH:mm:ss') : '';
        this.unit = obj.unit || 'ml';
    }
}

export class ConsumerLocalDto {
    public id: number;
    public capacity: number;
    public no: number;
    public unit: string;
    public is_empty: number;
    public version: number;
    public created: Date;
    public updated: Date;
    public time: string;
    public date: string;

    constructor(obj) {
        if (obj.id) {
            this.id = obj.id;
        }
        this.no = obj.no || 1;
        this.capacity = obj.capacity;
        this.is_empty = obj.isEmpty ? 1 : 0;
        this.version = obj.version || ConsumerConstant.NEW_FROM_LOCAL;
        this.unit = obj.unit || 'ml';
        this.created = new Date();
        this.updated = new Date();
        this.time = this.created ? DateHelper.dateByFormat(new Date(this.created), 'HH:mm') : '';
    }
}
