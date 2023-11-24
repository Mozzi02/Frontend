import { Injectable } from '@angular/core';
import { Cliente, RespuestaClientes } from './icliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  private clientesUrl = 'http://localhost:3000/api/clientes'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getClientes(): Observable<RespuestaClientes>{
    console.log('Haciendo solicitud a', this.clientesUrl);
    return this.http.get<RespuestaClientes>(this.clientesUrl)
    .pipe(
      catchError(this.handleError<RespuestaClientes>('getClientes', { message: '', data: [] }))
    );
  }

  agregarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.clientesUrl, cliente, this.httpOptions)
      .pipe(catchError(this.handleError<Cliente>('agregarCliente'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

