import { Injectable } from '@angular/core';
import { Empleado } from './iempleado';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private http: HttpClient) { }
 
  private empleadosUrl = 'api/empleados';
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.empleadosUrl)
    .pipe(
      catchError(this.handleError<Empleado[]>('getEmpleados', []))
    );
  }

  agregarEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.empleadosUrl, empleado, this.httpOptions)
      .pipe(catchError(this.handleError<Empleado>('agregarEmpleado'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
