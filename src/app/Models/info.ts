import {DateHelper} from '../Helper/date.helper';

export enum InfoConstant {
    DELETE = -1,
    NEW_FROM_LOCAL = 0,
    NEW_FROM_API = 1,
    UPDATE = 2
}

export class Info {
    public id: number;
    public weight: number;
    public height: number;
    public week: number;
    public month: number;
    public version: number;
    public created: string;
    public updated: string;

    constructor(obj = null) {
        if (obj) {
            this.id = obj.id;
            this.weight = obj.weight;
            this.height = obj.height;
            this.week = obj.week;
            this.month = obj.month;
            this.version = typeof obj.version === 'number' ? obj.version : InfoConstant.NEW_FROM_API;
            this.created = obj.created_at || obj.created;
            this.updated = obj.updated_at || obj.updated;
        } else {
            this.id = 0;
            this.month = 0;
            this.week = 0;
            this.weight = 0;
            this.height = 0;
        }
    }
}

export class InfoDto {
    public id: number;
    public weight: number;
    public height: number;
    public week: number;
    public month: number;
    public created_at: string;
    public updated_at: string;

    constructor(obj) {
        this.id = obj.id || null;
        this.weight = obj.weight;
        this.height = obj.height;
        this.week = obj.week;
        this.month = obj.month;
        this.created_at = obj.created ? DateHelper.dateByFormat(new Date(obj.created), 'YYYY-MM-DD HH:mm:ss') : '';
        this.updated_at = obj.updated ? DateHelper.dateByFormat(new Date(obj.updated), 'YYYY-MM-DD HH:mm:ss') : '';
    }
}

export class InfoLocalDto {
    public id: number;
    public weight: number;
    public height: number;
    public week: number;
    public month: number;
    public version: number;
    public created: Date;
    public updated: Date;

    constructor(obj) {
        if (obj.id) {
            this.id = obj.id;
        }
        this.weight = obj.weight;
        this.height = obj.height;
        this.week = obj.week;
        this.month = obj.month;
        this.version = obj.version || InfoConstant.NEW_FROM_LOCAL;
        this.created = new Date();
        this.updated = new Date();
    }
}
