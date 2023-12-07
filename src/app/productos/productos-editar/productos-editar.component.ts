import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductoService } from '../producto.service';
import { Producto } from '../iproducto';
import { TipoService } from 'src/app/tipoproducto/tipo.service';
import { RespuestaTipos, TipoProducto } from 'src/app/tipoproducto/itipo';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent {
  constructor(private router: Router, private productoService: ProductoService, private tipoService: TipoService){ }

  tipos: RespuestaTipos = {message: '', data: []};
  tipoProducto: TipoProducto = {idTipo: 0, descripcion: ''}

  producto: Producto = {idProducto: 0, descripcion: '', precio: 0, tipoProducto: this.tipoProducto, stock: 0, imagen: ''}

  cargandoProducto: boolean = true;

  ngOnInit(): void {
    this.tipoService.getTipos().subscribe(response => {this.tipos = response});

    const producto = history.state.producto;
    if (producto) {
      this.producto = producto;
      this.cargandoProducto = false;
    }
  }

  confirmarCambios(): void {
    this.productoService.editarProducto(this.producto).subscribe((data) => {return data});
    this.router.navigate(['/productos']);
  }
}
