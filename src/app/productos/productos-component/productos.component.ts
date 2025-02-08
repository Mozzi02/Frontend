import { Component, OnInit } from '@angular/core';
import { Producto, RespuestaProductos } from '../iproducto';
import { ProductoService } from '../producto.service';
import { RespuestaTipos, TipoProducto } from 'src/app/tipoproducto/itipo';
import { TipoService } from 'src/app/tipoproducto/tipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements  OnInit{
  
  constructor (private router: Router, private productoService: ProductoService, private tipoService: TipoService) {}
  
  ngOnInit(): void {
    this.getProductos();
    this.tipoService.getTipos().subscribe(response => {this.tipos = response});
  }

  idProducto: number = 0;
  descripcion: string = '';
  descripcionParcial: string = '';
  precio: number = 0;
  stock: number = 0;
  imagen: string = '';

  productos: RespuestaProductos = { message: '', data: [] };
  tipos: RespuestaTipos = { message: '', data: []};

  tipoProducto: TipoProducto = {idTipo: 0, descripcion: 'Prueba'};

  getProductos(): void {
    this.productoService.getProductos().subscribe(response => {
      this.productos = response;
    });
  }

  agregarNuevoProducto(): void {
    const idProducto = (this.productos.data.reduce((max, producto) => (producto.idProducto > max ? producto.idProducto: max), this.productos.data[0].idProducto)) + 1;
    const descripcion = this.descripcion;
    const precio = Number(this.precio);
    const tipoProducto = this.tipoProducto
    const stock = Number(this.stock);
    const imagen = this.imagen;
    
    const producto:Producto = {idProducto, descripcion, precio, tipoProducto, stock, imagen}

    this.productoService.agregarProducto(producto).subscribe(() => {
      this.getProductos();
    });
  }

  editarProducto(producto: Producto): void {
    this.router.navigate(['/productos', producto.idProducto], {state: {producto}})
  }

  borrarProducto(producto: Producto): void {
    this.productoService.borrarProducto(producto.idProducto).subscribe(() => {
      this.getProductos();
    });
  }

  buscarProductos(): void {
    const descripcionParcial = this.descripcionParcial;
    if (descripcionParcial){
    this.productoService.findSome(descripcionParcial).subscribe(response => {this.productos = response});
    }
  }

  formValido(): boolean {
    if (this.descripcion !== '' && this.precio > 0 && this.stock > 0 && this.tipoProducto.idTipo > 0 && this.imagen !== ''){
      return true
    } else {
      return false
    }
  }
}
