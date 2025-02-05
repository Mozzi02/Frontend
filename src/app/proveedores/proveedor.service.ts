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
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    })
  };

  getProveedores(): Observable<RespuestaProveedores>{
    return this.http.get<RespuestaProveedores>(this.proveedoresUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaProveedores>('getProveedores', { message: '', data: [] }))
    );
  }

  agregarProveedor(proveedor: Proveedor): Observable<Proveedor>{
    return this.http.post<Proveedor>(this.proveedoresUrl, proveedor, this.httpOptions)
      .pipe(catchError(this.handleError<Proveedor>('agregarProveedor'))
      );
  }

  editarProveedor(proveedor: Proveedor): Observable<Proveedor>{
    const url = `${this.proveedoresUrl}/${proveedor.idProveedor}`;

    return this.http.put<Proveedor>(url, proveedor, this.httpOptions)
      .pipe(catchError(this.handleError<Proveedor>('editarProveedor'))
      );
  }

  borrarProveedor(idProveedor: number): Observable<Proveedor>{
    const url = `${this.proveedoresUrl}/${idProveedor}`;
    
    return this.http.delete<Proveedor>(url, this.httpOptions)
    .pipe(catchError(this.handleError<Proveedor>('borrarProveedor'))
      );
  }

  findSome(razonSocial: string): Observable<RespuestaProveedores> {
    const url = `${this.proveedoresUrl}/buscar/${razonSocial}`;

    return this.http.get<RespuestaProveedores>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaProveedores>('buscarProveedores', {message: '', data: []}))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
