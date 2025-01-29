import { Component } from '@angular/core';
import { Pedido, RespuestaPedidos } from '../ipedido';
import { PedidoService } from '../pedido.service';
import { EmpleadoService } from 'src/app/empleados/empleado.service';
import { ProveedorService } from 'src/app/proveedores/proveedor.service';
import { ProductoService } from 'src/app/productos/producto.service';
import { Empleado, RespuestaEmpleados } from 'src/app/empleados/iempleado';
import { Rol } from 'src/app/roles/irol';
import { Proveedor, RespuestaProveedores } from 'src/app/proveedores/iproveedor';
import { Producto, RespuestaProductos } from 'src/app/productos/iproducto';
import { TipoProducto } from 'src/app/tipoproducto/itipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  constructor (private pedidoService: PedidoService, private empleadoService: EmpleadoService, private proveedorService: ProveedorService, private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.getPedidos();
    this.empleadoService.getEmpleados().subscribe(response => {this.empleados = response});
    this.proveedorService.getProveedores().subscribe(response => {this.proveedores = response});
    this.productoService.getProductos().subscribe(response => {this.productos = response});
  }

  cantidad: string = '';

  pedidos: RespuestaPedidos = { message: '', data: [] };
  empleados: RespuestaEmpleados = {message: '', data: []};
  proveedores: RespuestaProveedores = {message: '', data: []};
  productos: RespuestaProductos = {message: '', data: []};

  rol: Rol = {idRol: 0, descripcion: ''};
  empleado: Empleado = {idEmpleado: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', dni: '', rol: this.rol, password: ''}

  proveedor: Proveedor = {idProveedor: 0, cuit: '', razonSocial: '', telefono: '', email: ''};

  tipoProducto: TipoProducto = {idTipo: 0, descripcion: ''}
  producto: Producto = {idProducto: 0, descripcion: '', precio: 0, tipoProducto: this.tipoProducto, stock: 0, imagen: ''}

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe(response => {
      this.pedidos = response
      this.pedidos.data = this.pedidos.data.slice().sort((a, b) => new Date(b.fechaPedido).getTime() - new Date(a.fechaPedido).getTime());
    });
  }
  
  agregarNuevoPedido(): void {
    const idPedido = (this.pedidos.data.reduce((max, pedido) => (pedido.idPedido > max ? pedido.idPedido: max), this.pedidos.data[0].idPedido)) + 1;
    const fechaPedido: Date = new Date();
    const empleado = this.empleado;
    const proveedor = this.proveedor;
    const cantidad = Number(this.cantidad);
    const producto = this.producto;
    const estado = "En espera";

    const pedido:Pedido = {idPedido, fechaPedido, empleado, proveedor, cantidad, producto, estado}

    this.pedidoService.agregarPedido(pedido).subscribe((data) => {return data});

    location.reload();
  }

  confirmarPedido(pedido: Pedido): void{
    pedido.estado = "Confirmado"
    this.pedidoService.editarPedido(pedido).subscribe((data) => {return data});

    const producto = pedido.producto
    producto.stock = producto.stock + pedido.cantidad
    this.productoService.editarProducto(producto).subscribe((data) => {return data});
    
    location.reload();
  }

  editarPedido(pedido: Pedido): void {
    this.router.navigate(['/pedidos', pedido.idPedido], {state: {pedido}})
  }

  borrarPedido(pedido: Pedido): void {
    this.pedidoService.borrarPedido(pedido.idPedido).subscribe((data) => {return data});
    
    location.reload();
  }
}
