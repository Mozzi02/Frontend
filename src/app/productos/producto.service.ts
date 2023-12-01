import { Injectable } from '@angular/core';
import { Producto, RespuestaProductos } from './iproducto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }

  private productosUrl = 'http://localhost:3000/api/productos'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProductos(): Observable<RespuestaProductos>{
    return this.http.get<RespuestaProductos>(this.productosUrl)
    .pipe(
      catchError(this.handleError<RespuestaProductos>('getProductos', { message: '', data: [] }))
    );
  }

  getProducto(idProducto: number): Observable<Producto> {
  const url = `${this.productosUrl}/${idProducto}`;
  return this.http.get<Producto>(url).pipe(
    catchError(this.handleError<Producto>(`getProducto idProducto=${idProducto}`))
    );
  }
  
  agregarProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.productosUrl, producto, this.httpOptions)
      .pipe(catchError(this.handleError<Producto>('agregarProducto'))
      );
  }

  borrarProducto(idProducto: number): Observable<Producto>{
    const url = `${this.productosUrl}/${idProducto}`;
    
    return this.http.delete<Producto>(url, this.httpOptions)
    .pipe(catchError(this.handleError<Producto>('borrarProducto'))
      );
  }

  buscarProductos(term: string): Observable<RespuestaProductos> {
    const url = `${this.productosUrl}/?descripcion=${term}`;

    return this.http.get<RespuestaProductos>(url)
    .pipe(
      catchError(this.handleError<RespuestaProductos>('buscarProductos', { message: '', data: [] }))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
