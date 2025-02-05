import { Injectable } from '@angular/core';
import { Cliente, RespuestaClientes } from './icliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  private clientesUrl = 'http://localhost:3000/api/clientes'
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}` 
  })
  };

  getClientes(): Observable<RespuestaClientes>{
    return this.http.get<RespuestaClientes>(this.clientesUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaClientes>('getClientes', { message: '', data: [] }))
    );
  }

  agregarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.clientesUrl, cliente, this.httpOptions)
      .pipe(catchError(this.handleError<Cliente>('agregarCliente'))
      );
  }

  editarCliente(cliente: Cliente): Observable<Cliente>{
    const url = `${this.clientesUrl}/${cliente.idCliente}`

    return this.http.put<Cliente>(url, cliente, this.httpOptions)
      .pipe(catchError(this.handleError<Cliente>('editarCliente'))
      );
  }

  borrarCliente(idCliente: number): Observable<Cliente>{
    const url = `${this.clientesUrl}/${idCliente}`
    return this.http.delete<Cliente>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Cliente>('borrarCliente'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

