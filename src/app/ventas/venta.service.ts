import { Injectable } from '@angular/core';
import { Venta } from './iventa';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  constructor(private http: HttpClient) { }

  ventasUrl = 'api/ventas';
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getVentas(): Observable<Venta[]>{
    return this.http.get<Venta[]>(this.ventasUrl)
    .pipe(
      catchError(this.handleError<Venta[]>('getVentas', []))
    );
  }

  agregarVenta(venta: Venta): Observable<Venta>{
    return this.http.post<Venta>(this.ventasUrl, venta, this.httpOptions)
      .pipe(catchError(this.handleError<Venta>('agregarVenta'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
