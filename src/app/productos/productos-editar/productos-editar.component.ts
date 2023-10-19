import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductoService } from '../producto.service';
import { Producto } from '../iproducto';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent {
  constructor(private route: ActivatedRoute, private productoService: ProductoService, private location: Location){ }

  ngOnInit(): void {
    this.getProducto();
  }

  producto: Producto = {} as Producto;

  getProducto(): void {
    const idProducto = Number(this.route.snapshot.paramMap.get('idProducto'));
    this.productoService.getProducto(idProducto).subscribe(producto => {
      this.producto = producto;
      console.log(this.producto)
    });
  }

}
