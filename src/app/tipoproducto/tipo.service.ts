import { Injectable } from '@angular/core';
import { RespuestaTipos, TipoProducto } from './itipo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { enviroment } from 'enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  constructor(private http: HttpClient) { }

  private tiposUrl = `${enviroment.BACKEND_URL}/api/tipos-producto`;
  httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}` 
  })
  };

  getTipos(): Observable<RespuestaTipos>{
    return this.http.get<RespuestaTipos>(this.tiposUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaTipos>('getTipos', { message: '', data: [] }))
    );
  }

  agregarTipo(tipo: TipoProducto): Observable<TipoProducto>{
    return this.http.post<TipoProducto>(this.tiposUrl, tipo, this.httpOptions)
      .pipe(catchError(this.handleError<TipoProducto>('agregarTipo'))
      );
  }

  editarTipo(tipo: TipoProducto): Observable<TipoProducto> {
    const url = `${this.tiposUrl}/${tipo.idTipo}`

    return this.http.put<TipoProducto>(url, tipo, this.httpOptions)
      .pipe(catchError(this.handleError<TipoProducto>('editarTipo'))
      );
  }

  borrarTipo(idTipo: number): Observable<TipoProducto> {
    const url = `${this.tiposUrl}/${idTipo}`

    return this.http.delete<TipoProducto>(url, this.httpOptions)
      .pipe(catchError(this.handleError<TipoProducto>('borrarTipo'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
