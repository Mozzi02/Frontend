import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Proveedor } from '../iproveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedores-busqueda',
  templateUrl: './proveedores-busqueda.component.html',
  styleUrls: ['./proveedores-busqueda.component.css']
})
export class ProveedoresBusquedaComponent {
  proveedores$!: Observable<Proveedor[]>;
  private terminosBusqueda = new Subject<string>();

  constructor (private proveedorService: ProveedorService) {}

  buscar(term: string): void{
    this.terminosBusqueda.next(term);
  }

  ngOnInit(): void {
    this.proveedores$ = this.terminosBusqueda.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.proveedorService.buscarProveedores(term)),
    );
  }
}
