import { Component } from '@angular/core';
import { Linea_de_venta, RespuestaLineas } from '../ilineadeventa.js';
import { LineaService } from '../linea.service';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/productos/producto.service';
import { Producto, RespuestaProductos } from 'src/app/productos/iproducto.js';
import { TipoProducto } from 'src/app/tipoproducto/itipo.js';
import { Venta } from 'src/app/ventas/iventa.js';
import { Rol } from 'src/app/roles/irol.js';
import { Empleado } from 'src/app/empleados/iempleado.js';
import { Categoria } from 'src/app/categorias/icategoria.js';
import { Cliente } from 'src/app/clientes/icliente.js';
import { VentaService } from 'src/app/ventas/venta.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-lineadeventa',
  templateUrl: './lineadeventa.component.html',
  styleUrls: ['./lineadeventa.component.css']
})
export class LineadeventaComponent {
  constructor(private ventaService: VentaService, private lineaService: LineaService, private router: Router, private productoService: ProductoService){}

  lineasAux: Linea_de_venta[] = [];

  lineasDeLaVenta: RespuestaLineas = {message: '', data: []}
  lineas: RespuestaLineas = {message: '', data: []};
  productos: RespuestaProductos = {message: '', data: []};

  rol: Rol = {idRol: 0, descripcion: ''};
  empleado: Empleado = {idEmpleado: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', dni: '', rol: this.rol, password: ''}

  categoria: Categoria = {idCategoria: 0, descripcion: ''};
  cliente: Cliente = {idCliente: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', cuit: '', categoria: this.categoria}

  venta: Venta = {idVenta: 0, fechaVenta: new Date(), empleado: this.empleado, cliente: this.cliente}

  tipoProducto: TipoProducto = {idTipo: 0, descripcion: ''}
  producto: Producto = {idProducto: 0, descripcion: '', precio: 0, tipoProducto: this.tipoProducto, stock: 0, imagen: ''}

  cantidad: number = 0;

  mensajeError: string = '';
  mostrarMensaje: boolean = false;

  ngOnInit(): void {
    this.lineasAux = [];
    this.getLineas();
    this.productoService.getProductos().subscribe(response => {this.productos = response});
  
    const venta = history.state.venta;
    if (venta){
      this.venta = venta;
    }

    this.getLineasDeLaVenta()
  }

  getLineas(): void {
    this.lineaService.getLineas().subscribe(response => {this.lineas = response});
  }

  getLineasDeLaVenta(): void {
    this.lineaService.getLineasDeLaVenta(this.venta).subscribe(response => {this.lineasDeLaVenta = response});
  }

  agregarNuevaLinea(): void {
    if (this.lineasAux.some(linea => linea.producto.idProducto === this.producto.idProducto)){
      this.lineasAux = this.lineasAux.map(linea => {
        if (linea.producto.idProducto === this.producto.idProducto){
          if (this.producto.stock >= (linea.cantidad + this.cantidad)){
            linea.cantidad = linea.cantidad + this.cantidad
            this.mensajeError = '';
            this.mostrarMensaje = false;
          } else {
            this.mensajeError = 'Stock insuficiente';
            this.mostrarMensaje = true;
            setTimeout(() => {
              this.mostrarMensaje = false;
            }, 3000);
          }
        }
        return linea;
      })
    } else {
      if (this.producto.stock >= this.cantidad){
      const idLineaVenta = (this.lineas.data.reduce((max, linea) => (linea.idLineaVenta > max ? linea.idLineaVenta: max), this.lineas.data[0].idLineaVenta)) + 1;
      const producto = this.producto;
      const cantidad = this.cantidad;

      const linea: Linea_de_venta = {idLineaVenta, cantidad, venta: this.venta, producto}
    
      this.lineasAux.push(linea);
      this.lineas.data.push(linea);
      this.lineasDeLaVenta.data.push(linea);

      this.mensajeError = '';
      this.mostrarMensaje = false;
      } else {
        this.mensajeError = 'Stock insuficiente';
        this.mostrarMensaje = true;
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 3000);
      }
    }
  }

  editarLinea(linea: Linea_de_venta): void{
    this.router.navigate(['/lineas', linea.idLineaVenta], {state: {linea}})
  }

  borrarLinea(linea: Linea_de_venta): void {
    this.lineaService.borrarLinea(linea.idLineaVenta).subscribe((data) => {return data})

    location.reload();
  }

  finalizarVenta(): void {
    this.ventaService.agregarVenta(this.venta).pipe(
      map(() => this.lineasAux.forEach((linea: Linea_de_venta) => {
        this.lineaService.agregarLinea(linea).subscribe((data) => {return data}),
        linea.producto.stock = linea.producto.stock - linea.cantidad,
        this.productoService.editarProducto(linea.producto).subscribe((data) => {return data})
      }))
    )
    .subscribe((data) => {return data});
    this.router.navigate(['/ventas']);
    }
}

