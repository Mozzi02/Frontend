import { Injectable } from '@angular/core';
import { Proveedor, RespuestaProveedores } from './iproveedor';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  constructor(private http: HttpClient) { }

  private proveedoresUrl = 'http://localhost:3000/api/proveedores'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProveedores(): Observable<RespuestaProveedores>{
    console.log('Haciendo solicitud a', this.proveedoresUrl);
    return this.http.get<RespuestaProveedores>(this.proveedoresUrl)
    .pipe(
      catchError(this.handleError<RespuestaProveedores>('getProveedores', { message: '', data: [] }))
    );
  }

  agregarProveedor(proveedor: Proveedor): Observable<Proveedor>{
    return this.http.post<Proveedor>(this.proveedoresUrl, proveedor, this.httpOptions)
      .pipe(catchError(this.handleError<Proveedor>('agregarProveedor'))
      );
  }

  buscarProveedores(term: string): Observable<Proveedor[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Proveedor[]>(`${this.proveedoresUrl}/?razonSocial=${term}`).pipe(
      catchError(this.handleError<Proveedor[]>('buscarProveedores', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
