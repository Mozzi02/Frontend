import { Injectable } from '@angular/core';
import { Cliente } from './icliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  private clientesUrl = 'api/clientes'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.clientesUrl)
    .pipe(
      catchError(this.handleError<Cliente[]>('getClientes', []))
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

