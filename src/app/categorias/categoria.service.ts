import { Injectable } from '@angular/core';
import { Categoria } from './icategoria';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }

  private categoriasUls = 'api/categorias'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.categoriasUls)
    .pipe(
      catchError(this.handleError<Categoria[]>('getCategorias', []))
    );
  }

  agregarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.categoriasUls, categoria, this.httpOptions)
      .pipe(catchError(this.handleError<Categoria>('agregarCategoria'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
