import { Injectable } from '@angular/core';
import { Pedido } from './ipedido';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient) { }

  private pedidosUrl = 'api/pedidos'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.pedidosUrl)
    .pipe(
      catchError(this.handleError<Pedido[]>('getPedidos', []))
    );
  }

  agregarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.pedidosUrl, pedido, this.httpOptions)
      .pipe(catchError(this.handleError<Pedido>('agregarPedido'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
