import { Component } from '@angular/core';
import { RespuestaTipos, TipoProducto } from '../itipo';
import { TipoService } from '../tipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipoproducto',
  templateUrl: './tipoproducto.component.html',
  styleUrls: ['./tipoproducto.component.css']
})
export class TipoproductoComponent {
  constructor (private tipoService: TipoService, private router: Router) {}

  ngOnInit(): void {
    this.getTipos();
  }

  descripcion: string = '';

  tipos: RespuestaTipos = { message: '', data: [] };

  getTipos(): void {
    this.tipoService.getTipos().subscribe(response => {this.tipos = response});
  }

  agregarNuevoTipo(): void {
    const idTipo = (this.tipos.data.reduce((max, tipo) => (tipo.idTipo > max ? tipo.idTipo: max), this.tipos.data[0].idTipo)) + 1;
    const descripcion = this.descripcion;

    const tipo:TipoProducto = {idTipo, descripcion}

    this.tipoService.agregarTipo(tipo).subscribe((data) => {return data})
    location.reload();
  }

  editarTipo(tipo: TipoProducto): void {
    this.router.navigate(['/tipos', tipo.idTipo], {state: {tipo}});
  }

  borrarTipo(tipo: TipoProducto): void {
    this.tipoService.borrarTipo(tipo.idTipo).subscribe((data) => {return data})
    location.reload();
  }
}
