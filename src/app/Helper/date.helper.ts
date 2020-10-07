import * as moment from 'moment';

export class DateHelper {
    public static dateByFormat(date: Date, formatDate: string): string {
        return moment(date).format(formatDate);
    }

    public static formatToSecond(time): moment.Moment {
        return moment().add(time, 'second');
    }

    public static formatMoment(time): moment.Moment {
        return moment(time);
    }

    public static isBefore(time: moment.Moment): boolean {
        return moment().isBefore(time);
    }
}
