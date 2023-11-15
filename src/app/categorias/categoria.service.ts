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

  categorias: Categoria[] = []

  private categoriasUls = 'http://localhost:3000/api/categorias'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategorias(): void{
    this.http.get<any>(this.categoriasUls).subscribe(data => {
      this.categorias = data.total;
   });
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
