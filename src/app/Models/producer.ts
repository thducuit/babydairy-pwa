import {DateHelper} from '../Helper/date.helper';

export class Producer {
    public id: number;
    public capacity: number;
    public no: number;
    public unit: string;
    public created: string;
    public updated: string;
    public time: string;

    constructor(obj = null) {
        if (obj) {
            this.id = obj.id;
            this.capacity = obj.capacity;
            this.no = obj.no;
            this.unit = obj.unit || 'ml';
            this.created = obj.created_at;
            this.updated = obj.updated_at;
            this.time = this.created ? DateHelper.dateByFormat(new Date(this.created), 'HH:mm') : '';
        } else {
            this.id = 0;
            this.capacity = 0;
            this.no = 1;
            this.unit = 'ml';
        }
    }

    public isDateEqual(date: Date): boolean {
        return DateHelper.dateByFormat(new Date(this.created), 'MM/DD/YYYY') === DateHelper.dateByFormat(date, 'MM/DD/YYYY');
    }
}

export class ProducerDto {
    public id: number;
    public capacity: number;
    public no: number;
    public unit: string;

    constructor(obj) {
        this.id = obj.id || null;
        this.no = obj.no || 1;
        this.capacity = obj.capacity;
        this.unit = obj.unit || 'ml';
    }
}
