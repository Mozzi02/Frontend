import { Injectable } from '@angular/core';
import { Pedido, RespuestaPedidos } from './ipedido';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient) { }

  private pedidosUrl = 'http://localhost:3000/api/pedidos'
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

  getPedidos(): Observable<RespuestaPedidos>{
    console.log('Haciendo solicitud a', this.pedidosUrl);
    return this.http.get<RespuestaPedidos>(this.pedidosUrl)
    .pipe(
      catchError(this.handleError<RespuestaPedidos>('getPedidos', { message: '', data: [] }))
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
