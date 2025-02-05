import { Injectable } from '@angular/core';
import { Categoria, RespuestaCategorias } from './icategoria';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }

  private categoriasUrl = 'http://localhost:3000/api/categorias'
  httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
  })
  };

  getCategorias(): Observable<RespuestaCategorias>{
    return this.http.get<RespuestaCategorias>(this.categoriasUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaCategorias>('getCategorias', { message: '', data: [] }))
    );
  }

  getCategoria(idCategoria: number): Observable<Categoria>{
  const url = `${this.categoriasUrl}/${idCategoria}`

    return this.http.get<Categoria>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Categoria>('getCategoria'))
      );
  }
  

  agregarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.categoriasUrl, categoria, this.httpOptions)
      .pipe(catchError(this.handleError<Categoria>('agregarCategoria'))
      );
  }

  editarCategoria(categoria:Categoria): Observable<Categoria>{
    const url = `${this.categoriasUrl}/${categoria.idCategoria}`

    return this.http.put<Categoria>(url, categoria, this.httpOptions)
      .pipe(catchError(this.handleError<Categoria>('editarCategoria'))
      );
  }

  borrarCategoria(idCategoria: number): Observable<Categoria>{
    const url = `${this.categoriasUrl}/${idCategoria}`
    
    return this.http.delete<Categoria>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Categoria>('borrarCategoria'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
