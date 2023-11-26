import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { IUltima } from "./ultima";

@Injectable({
  providedIn: 'root'
})
export class UltimeService {
  private ultimeUrl = '/assets/women/femminicidi.json';

  constructor(private http: HttpClient) { }

  //method to get all the interviews from the json
  getUltime(): Observable<IUltima[]> {
    return this.http.get<IUltima[]>(this.ultimeUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
  

}
