import { Component, OnInit } from '@angular/core';
import { Producto } from '../iproducto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements  OnInit{
  
  constructor (private productoService: ProductoService) {}
  
  ngOnInit(): void {
    console.log("asd");
    this.getProductos();
  }

  descripcion: string = '';
  precio: string = '';
  tipo: string = 'otro';
  stock: string = '';
  imagen: string = '';
  productos: Producto[] = []

  getProductos(): void {
    console.log("getprod1");
    this.productoService.getProductos().subscribe(productos => this.productos = productos);
    console.log("getprod2");
  }

  agregarNuevoProducto(){
    const idProducto = (this.productos.length) + 1;
    const descripcion = this.descripcion;
    const precio = Number(this.precio);
    const idTipo:number = (this.tipo =='Campera') ? 1 : (this.tipo =='Gorro') ? 2 : (this.tipo =='Calzado') ? 3 : (this.tipo=='Pantalon') ? 4 : (this.tipo == 'otro')?0:0;
    const stock = Number(this.stock);
    const imagen = this.imagen;
    
    const producto:Producto = {idProducto, descripcion, precio, idTipo, stock, imagen}

    this.productoService.agregarProducto(producto);
    this.productos.push(producto);
  }
  productoSubmit(){
    this.descripcion = '';
    this.precio = '';
    this.tipo = 'otro';
    this.stock = '';
    this.imagen = '';
  }
}
