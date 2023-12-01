import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Producto } from '../iproducto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos-busqueda',
  templateUrl: './productos-busqueda.component.html',
  styleUrls: ['./productos-busqueda.component.css']
})
export class ProductosBusquedaComponent implements OnInit {
  productos$!: Observable<Producto[]>;
  private terminosBusqueda = new Subject<string>();

  constructor (private productoService: ProductoService) {}

  buscar(term: string): void{
    this.terminosBusqueda.next(term);
  }

  ngOnInit(): void {
    /*
    this.productos$ = this.terminosBusqueda.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.productoService.buscarProductos(term)),
    );
    */
  }
}
