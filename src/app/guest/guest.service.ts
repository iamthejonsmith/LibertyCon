import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class GuestService {
    http: any;
    get(): Observable<any> {
        return this.http.get(['http://mysql.libertycon.org/']).pipe(
            catchError(this.handleError(`get`))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
    log(arg0: string): any {
        throw new Error('Method not implemented.');
    }
}

