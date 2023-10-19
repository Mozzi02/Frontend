import { Injectable } from '@angular/core';
import { Rol } from './irol';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  constructor(private http: HttpClient) { }

  private rolesUrl = 'api/roles'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getRoles(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.rolesUrl)
    .pipe(
      catchError(this.handleError<Rol[]>('getRoles', []))
    );
  }

  agregarRol(rol: Rol): Observable<Rol>{
    return this.http.post<Rol>(this.rolesUrl, rol, this.httpOptions)
      .pipe(catchError(this.handleError<Rol>('agregarRol'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
