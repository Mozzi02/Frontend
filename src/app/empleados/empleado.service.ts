import { Injectable } from '@angular/core';
import { Empleado, RespuestaEmpleados } from './iempleado';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private http: HttpClient) { }
 
  private empleadosUrl = 'http://localhost:3000/api/empleados'
  httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}` 
  })
  };


  getEmpleados(): Observable<RespuestaEmpleados>{
    return this.http.get<RespuestaEmpleados>(this.empleadosUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaEmpleados>('getEmpleados', { message: '', data: [] }))
    );
  }


  agregarEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.empleadosUrl, empleado, this.httpOptions)
      .pipe(catchError(this.handleError<Empleado>('agregarEmpleado'))
      );
  }

  editarEmpleado(empleado: Empleado): Observable<Empleado>{
    const url = `${this.empleadosUrl}/${empleado.idEmpleado}`

    return this.http.put<Empleado>(url, empleado, this.httpOptions)
      .pipe(catchError(this.handleError<Empleado>('editarEmpleado'))
      );
  }

  borrarEmpleado(idEmpleado: number): Observable<Empleado>{
    const url = `${this.empleadosUrl}/${idEmpleado}`
    return this.http.delete<Empleado>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Empleado>('borrarEmpleado'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
