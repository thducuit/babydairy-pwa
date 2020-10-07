import {Injectable} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {Observable} from 'rxjs';
import {DateHelper} from '../Helper/date.helper';

export interface LoginData {
    email: string;
    password: string;
}

@Injectable()
export class AuthService {

    private url = '/login';

    constructor(private http: RestApiService) {
    }

    public login(data: LoginData): Observable<any> {
        return this.http.post(this.url, data);
    }

    public setToken(res): void {
        const expiresAt = DateHelper.formatToSecond(res.expiresAt);
        localStorage.setItem('id_token', res.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    }

    public logout(): void {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public isLoggedIn(): boolean {
        return DateHelper.isBefore(this.getExpiration());
    }

    public isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    private getExpiration(): any {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return DateHelper.formatMoment(expiresAt);
    }
}
