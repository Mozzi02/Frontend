import { Component, OnInit } from '@angular/core';
import { Producto, RespuestaProductos } from '../iproducto';
import { ProductoService } from '../producto.service';
import { RespuestaTipos, TipoProducto } from 'src/app/tipoproducto/itipo';
import { TipoService } from 'src/app/tipoproducto/tipo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements  OnInit{
  
  constructor (private productoService: ProductoService, private tipoService: TipoService) {}
  
  ngOnInit(): void {
    this.getProductos();
    this.tipoService.getTipos().subscribe(response => {this.tipos = response, console.log('Tipos en el componente:', this.tipos)});
  }

  descripcion: string = '';
  descripcionParcial: string = '';
  precio: string = '';
  stock: string = '';
  imagen: string = '';

  productos: RespuestaProductos = { message: '', data: [] };
  tipos: RespuestaTipos = { message: '', data: []};

  tipoProducto: TipoProducto = {idTipo: 0, descripcion: ''};

  getProductos(): void {
    this.productoService.getProductos().subscribe(response => {this.productos = response, console.log('Productos en el componente:', this.productos)});
  }

  agregarNuevoProducto(): void {
    const idProducto = (this.productos.data.reduce((max, producto) => (producto.idProducto > max ? producto.idProducto: max), this.productos.data[0].idProducto)) + 1;
    const descripcion = this.descripcion;
    const precio = Number(this.precio);
    const tipoProducto = this.tipoProducto
    const stock = Number(this.stock);
    const imagen = this.imagen;
    
    const producto:Producto = {idProducto, descripcion, precio, tipoProducto, stock, imagen}

    this.productoService.agregarProducto(producto).subscribe((data) => {return data});
    this.getProductos();
  }

  borrarProducto(producto: Producto): void {
    this.productoService.borrarProducto(producto.idProducto).subscribe((data) => {return data});
    this.getProductos();
  }

  buscarProductos(): void {
    const descripcionParcial = this.descripcionParcial;

    this.productoService.buscarProductos(descripcionParcial).subscribe(response => {this.productos = response, console.log('Productos de la búsqueda:', this.productos)});
  }
}
