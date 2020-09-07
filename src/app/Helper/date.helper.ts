import * as moment from 'moment';

export class DateHelper {
    public static dateByFormat(date: Date, formatDate: string): string {
        return moment(date).format(formatDate);
    }
}
