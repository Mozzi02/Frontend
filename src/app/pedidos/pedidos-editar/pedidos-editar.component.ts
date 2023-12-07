import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/empleados/empleado.service';
import { ProductoService } from 'src/app/productos/producto.service';
import { ProveedorService } from 'src/app/proveedores/proveedor.service';
import { PedidoService } from '../pedido.service';
import { Empleado, RespuestaEmpleados } from 'src/app/empleados/iempleado';
import { Proveedor, RespuestaProveedores } from 'src/app/proveedores/iproveedor';
import { Producto, RespuestaProductos } from 'src/app/productos/iproducto';
import { Rol } from 'src/app/roles/irol';
import { TipoProducto } from 'src/app/tipoproducto/itipo';
import { Pedido } from '../ipedido';

@Component({
  selector: 'app-pedidos-editar',
  templateUrl: './pedidos-editar.component.html',
  styleUrls: ['./pedidos-editar.component.css']
})
export class PedidosEditarComponent {
  constructor (private router: Router, private empleadoService: EmpleadoService, private proveedorService: ProveedorService, private productoService: ProductoService, private pedidoService: PedidoService) {}

  empleados: RespuestaEmpleados = {message: '', data: []}
  proveedores: RespuestaProveedores = {message: '', data: []}
  productos: RespuestaProductos = {message: '', data: []}

  rol: Rol = {idRol: 0, descripcion: ''};
  empleado: Empleado = {idEmpleado: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', dni: '', rol: this.rol, password: ''}

  proveedor: Proveedor = {idProveedor: 0, cuit: '', razonSocial: '', telefono: '', email: ''};

  tipoProducto: TipoProducto = {idTipo: 0, descripcion: ''}
  producto: Producto = {idProducto: 0, descripcion: '', precio: 0, tipoProducto: this.tipoProducto, stock: 0, imagen: ''}

  pedido: Pedido = {idPedido: 0, fechaPedido: new Date(), empleado: this.empleado, proveedor: this.proveedor, cantidad: 0, producto: this.producto}

  cargandoPedido: boolean = true;

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(response => {this.empleados = response});
    this.proveedorService.getProveedores().subscribe(response => {this.proveedores = response});
    this.productoService.getProductos().subscribe(response => {this.productos = response});
  
    const pedido = history.state.pedido;

    if (pedido) {
      this.pedido = pedido;
      this.cargandoPedido = false;
    }
  }

  confirmarCambios(): void {
    this.pedidoService.editarPedido(this.pedido).subscribe((data) => {return data});
    this.router.navigate(['/pedidos']);
  }
}
