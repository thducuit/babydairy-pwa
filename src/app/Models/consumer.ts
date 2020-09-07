import {DateHelper} from '../Helper/date.helper';

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

    constructor(obj = null) {
        if (obj) {
            this.id = obj.id;
            this.capacity = obj.capacity;
            this.no = obj.no;
            this.unit = obj.unit || 'ml';
            this.isEmpty = obj.is_empty === 1;
            this.created = obj.created_at;
            this.updated = obj.updated_at;
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

    constructor(obj) {
        this.id = obj.id || null;
        this.no = obj.no || 1;
        this.capacity = obj.capacity;
        this.is_empty = obj.isEmpty ? 1 : 0;
        this.unit = obj.unit || 'ml';
    }
}
