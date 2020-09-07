export class Info {
    public id: number;
    public weight: number;
    public height: number;
    public week: number;
    public month: number;

    constructor(obj) {
        this.id = obj.id;
        this.weight = obj.weight;
        this.height = obj.height;
        this.week = obj.week;
        this.month = obj.month;
    }
}
