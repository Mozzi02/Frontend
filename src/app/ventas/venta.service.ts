import { Injectable } from '@angular/core';
import { RespuestaVentas, Venta } from './iventa';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  constructor(private http: HttpClient) { }

  ventasUrl = 'http://localhost:3000/api/ventas';
  httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}` 
  })
  };


  getVentas(): Observable<RespuestaVentas>{
    return this.http.get<RespuestaVentas>(this.ventasUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaVentas>('getVentas', { message: '', data: [] }))
    );
  }

  getVentasFromYear(year: number): Observable<RespuestaVentas>{
    const url = `${this.ventasUrl}/buscar/${year}`;

    return this.http.get<RespuestaVentas>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaVentas>('getVentas', { message: '', data: [] }))
    );
  }

  agregarVenta(venta: Venta): Observable<Venta>{
    return this.http.post<Venta>(this.ventasUrl, venta, this.httpOptions)
      .pipe(catchError(this.handleError<Venta>('agregarVenta'))
      );
  }

  editarVenta(venta: Venta): Observable<Venta>{
    const url = `${this.ventasUrl}/${venta.idVenta}`;

    return this.http.put<Venta>(url, venta, this.httpOptions)
      .pipe(catchError(this.handleError<Venta>('agregarVenta'))
      );
  }

  borrarVenta(idVenta: number): Observable<Venta>{
    const url = `${this.ventasUrl}/${idVenta}`;

    return this.http.delete<Venta>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Venta>('borrarVenta'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
