import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  private log(message: string) {
    console.log(message);
  }

  getAll2() {
    return this.http.get<any[]>(this.url).
    pipe(
      map(response => response),
      catchError(this.handleError))
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
    .pipe(
        map(response =>{
            return response;
        }),
        catchError(this.handleError2<any[]>([]))
    );
  }

  create(resource) {

    return this.http.post(this.url, JSON.stringify(resource)).pipe(
        map(response => response),
        catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
        map(response => response),
        catchError(this.handleError)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
        map(response => response),
        catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 400) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

  private handleError2<T>(result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead      
        return Observable.throw(new NotFoundError)
      // Let the app keep running by returning an empty result.
      //return of(result as T);
    };
  }

}
