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
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}` // Agrega el token
  })
  };
  

  getPedidos(): Observable<RespuestaPedidos>{
    return this.http.get<RespuestaPedidos>(this.pedidosUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<RespuestaPedidos>('getPedidos', { message: '', data: [] }))
    );
  }


  agregarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.pedidosUrl, pedido, this.httpOptions)
      .pipe(catchError(this.handleError<Pedido>('agregarPedido'))
      );
  }

  editarPedido(pedido: Pedido): Observable<Pedido>{
  const url = `${this.pedidosUrl}/${pedido.idPedido}`

    return this.http.put<Pedido>(url, pedido, this.httpOptions)
      .pipe(catchError(this.handleError<Pedido>('editarPedido'))
      );
  }

  borrarPedido(idPedido: number): Observable<Pedido>{
    const url = `${this.pedidosUrl}/${idPedido}`
    return this.http.delete<Pedido>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Pedido>('borrarPedido'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
