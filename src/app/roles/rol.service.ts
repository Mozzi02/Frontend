import { Injectable } from '@angular/core';
import { RespuestaRoles, Rol } from './irol';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  constructor(private http: HttpClient) { }

  private rolesUrl = 'http://localhost:3000/api/roles'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getRoles(): Observable<RespuestaRoles>{
    console.log('Haciendo solicitud a', this.rolesUrl);
    return this.http.get<RespuestaRoles>(this.rolesUrl)
    .pipe(
      catchError(this.handleError<RespuestaRoles>('getRoles', { message: '', data: [] }))
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
