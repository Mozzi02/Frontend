import { Component } from '@angular/core';
import { Pedido } from '../ipedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  constructor (private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  fechaPedido: string = '';
  idEmpleado: string = '';
  idProveedor: string = '';
  cantidad: string = '';
  idProducto: string = '';
  pedidos: Pedido[] = []

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
  }
  
    agregarNuevoPedido(): void {
    const idPedido = (this.pedidos.length) + 1;
    const fechaPedido = this.fechaPedido;
    const idEmpleado = Number(this.idEmpleado);
    const idProveedor = Number(this.idProveedor);
    const cantidad = Number(this.cantidad);
    const idProducto = Number(this.idProducto);

    const pedido:Pedido = {idPedido, fechaPedido, idEmpleado, idProveedor, cantidad, idProducto}

    this.pedidoService.agregarPedido(pedido);
    this.pedidos.push(pedido);
  }
}
