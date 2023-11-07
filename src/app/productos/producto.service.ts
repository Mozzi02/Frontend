import { Injectable } from '@angular/core';
import { Producto } from './iproducto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }

  private productosUrl = 'api/productos'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProductos(): Observable<Producto[]>{
    console.log("getprodenService");
    return this.http.get<Producto[]>(this.productosUrl)
    .pipe(
      catchError(this.handleError<Producto[]>('getProductos', []))
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

  buscarProductos(term: string): Observable<Producto[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Producto[]>(`${this.productosUrl}/?descripcion=${term}`).pipe(
      catchError(this.handleError<Producto[]>('buscarProductos', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
