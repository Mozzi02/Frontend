import { Component, OnInit } from '@angular/core';
import { Producto } from '../iproducto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  constructor (private productoService: ProductoService) {}

  ngOnInit(): void {
    console.log("asd");
    this.getProductos();
  }

  descripcion: string = '';
  precio: string = '';
  tipo: string = '';
  stock: string = '';
  imagen: string = '';
  productos: Producto[] = []

  getProductos(): void {
    this.productoService.getProductos().subscribe(productos => this.productos = productos);
  }

  agregarNuevoProducto(){
    const idProducto = (this.productos.length) + 1;
    const descripcion = this.descripcion;
    const precio = Number(this.precio);
    let idTipo = 0;
    switch (this.tipo) {
      case 'Campera':
        idTipo = 1
        break;

      case 'Gorro':
        idTipo = 2
        break;

      case 'Calzado':
        idTipo = 3
        break;

      case 'Pantalon':
        idTipo = 4
        break;
    }
    const stock = Number(this.stock);
    const imagen = this.imagen;
    const producto:Producto = {idProducto, descripcion, precio, idTipo, stock, imagen}

    this.productoService.agregarProducto(producto);
    this.productos.push(producto);
  }
  productoSubmit(){
    this.descripcion = '';
    this.precio = '';
    this.tipo = '';
    this.stock = '';
    this.imagen = '';
  }
}
