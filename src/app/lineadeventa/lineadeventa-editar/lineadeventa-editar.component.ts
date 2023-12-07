import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LineaService } from '../linea.service';
import { ProductoService } from 'src/app/productos/producto.service';
import { Producto, RespuestaProductos } from 'src/app/productos/iproducto';
import { Linea_de_venta } from '../ilineadeventa';
import { Venta } from 'src/app/ventas/iventa';
import { TipoProducto } from 'src/app/tipoproducto/itipo';
import { Categoria } from 'src/app/categorias/icategoria';
import { Cliente } from 'src/app/clientes/icliente';
import { Rol } from 'src/app/roles/irol';
import { Empleado } from 'src/app/empleados/iempleado';

@Component({
  selector: 'app-lineadeventa-editar',
  templateUrl: './lineadeventa-editar.component.html',
  styleUrls: ['./lineadeventa-editar.component.css']
})
export class LineadeventaEditarComponent {
  constructor (private router: Router, private lineaService: LineaService, private productoService: ProductoService) {}

  productos: RespuestaProductos = {message: '', data: []};

  tipoProducto: TipoProducto = {idTipo: 0, descripcion: ''}
  producto: Producto = {idProducto: 0, descripcion: '', precio: 0, tipoProducto: this.tipoProducto, stock: 0, imagen: ''}

  categoria: Categoria = {idCategoria: 0, descripcion: ''};
  cliente: Cliente = {idCliente: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', cuit: '', categoria: this.categoria}

  rol: Rol = {idRol: 0, descripcion: ''};
  empleado: Empleado = {idEmpleado: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', dni: '', rol: this.rol, password: ''}

  venta: Venta = {idVenta: 0, fechaVenta: new Date(), empleado: this.empleado, cliente: this.cliente};

  linea: Linea_de_venta = {idLineaVenta: 0, cantidad: 0, venta: this.venta, producto: this.producto}

  cargandoLinea: boolean = true;

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(response => {this.productos = response});

    const linea = history.state.linea;
    if (linea){
      this.linea = linea;
      this.cargandoLinea = false;
    }
  }

  confirmarCambios():void {
    const venta = this.linea.venta;
    this.lineaService.editarLinea(this.linea).subscribe((data) => {return data});

    this.router.navigate(['/ventas', this.linea.venta.idVenta], {state: {venta}});
  }
}
