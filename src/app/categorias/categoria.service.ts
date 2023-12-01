import { Injectable } from '@angular/core';
import { Categoria, RespuestaCategorias } from './icategoria';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }

  private categoriasUrl = 'http://localhost:3000/api/categorias'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategorias(): Observable<RespuestaCategorias>{
    console.log('Haciendo solicitud a', this.categoriasUrl);
    return this.http.get<RespuestaCategorias>(this.categoriasUrl)
    .pipe(
      catchError(this.handleError<RespuestaCategorias>('getCategorias', { message: '', data: [] }))
    );
  }
  

  agregarCategoria(categoria: Categoria): Observable<Categoria>{
    console.log("Inicia agregar del service");
    return this.http.post<Categoria>(this.categoriasUrl, categoria, this.httpOptions)
      .pipe(catchError(this.handleError<Categoria>('agregarCategoria'))
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
