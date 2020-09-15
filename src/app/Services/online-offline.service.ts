import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

declare const window: any;

@Injectable({
    providedIn: 'root'
})
export class OnlineOfflineService {

    private internalConnectionChanged = new Subject<boolean>();

    get connectionChanged(): Observable<boolean> {
        return this.internalConnectionChanged.asObservable();
    }

    get isOnline(): boolean {
        return !!window.navigator.onLine;
    }

    constructor() {
        window.addEventListener('online', () => {
            this.updateOnlineStatus();
        });
        window.addEventListener('offline', () => {
            this.updateOnlineStatus();
        });
    }

    private updateOnlineStatus(): void {
        this.internalConnectionChanged.next(window.navigator.onLine);
    }
}
