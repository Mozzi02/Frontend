import { Injectable } from '@angular/core';
import { TipoProducto } from './itipo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  constructor(private http: HttpClient) { }

  private tiposUrl = 'api/tipos';
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTipos(): Observable<TipoProducto[]>{
    return this.http.get<TipoProducto[]>(this.tiposUrl)
    .pipe(
      catchError(this.handleError<TipoProducto[]>('getTipos', []))
    );
  }

  agregarTipo(tipo: TipoProducto): Observable<TipoProducto>{
    return this.http.post<TipoProducto>(this.tiposUrl, tipo, this.httpOptions)
      .pipe(catchError(this.handleError<TipoProducto>('agregarTipo'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
