import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Linea_de_venta, RespuestaLineas } from './ilineadeventa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Venta } from '../ventas/iventa';

@Injectable({
  providedIn: 'root'
})
export class LineaService {
  constructor(private http: HttpClient) { }

  lineasUrl = 'http://localhost:3000/api/lineas';
  httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}` // Agrega el token
  })
  };

  getLineas(): Observable<RespuestaLineas> {
    return this.http.get<RespuestaLineas>(this.lineasUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaLineas>('getLineas', { message: '', data: [] }))
    );
  }

  getLineasDeLaVenta(venta: Venta): Observable<RespuestaLineas>{
    const url = `${this.lineasUrl}/venta/${venta.idVenta}`;

    return this.http.get<RespuestaLineas>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaLineas>('getLineasDeLaVenta', { message: '', data: [] }))
    );
  }

  agregarLinea(linea: Linea_de_venta): Observable<Linea_de_venta>{
    return this.http.post<Linea_de_venta>(this.lineasUrl, linea, this.httpOptions)
    .pipe(
      catchError(this.handleError<Linea_de_venta>('agergarLinea'))
    );
  }

  editarLinea(linea: Linea_de_venta): Observable<Linea_de_venta>{
    const url = `${this.lineasUrl}/${linea.idLineaVenta}`;

    return this.http.put<Linea_de_venta>(url, linea, this.httpOptions)
    .pipe(
      catchError(this.handleError<Linea_de_venta>('editarLinea'))
    );
  }

  borrarLinea(idLineaVenta: number): Observable<Linea_de_venta>{
    const url = `${this.lineasUrl}/${idLineaVenta}`;

    return this.http.delete<Linea_de_venta>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<Linea_de_venta>('borrarLinea'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
