import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    private apiUrl = environment.api;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    private getEndpoint(url: string): string {
        return `${this.apiUrl}${url}`;
    }

    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.getEndpoint(url));
    }

    public post<T>(url: string, params): Observable<T> {
        return this.http.post<T>(
            this.getEndpoint(url),
            params,
            this.httpOptions
        );
    }

    public put<T>(url: string, params): Observable<T> {
        return this.http.put<T>(
            this.getEndpoint(url),
            params,
            this.httpOptions
        );
    }

    public delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(
            this.getEndpoint(url)
        );
    }
}
