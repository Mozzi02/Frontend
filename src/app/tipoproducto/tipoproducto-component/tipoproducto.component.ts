import { Component } from '@angular/core';
import { RespuestaTipos, TipoProducto } from '../itipo';
import { TipoService } from '../tipo.service';

@Component({
  selector: 'app-tipoproducto',
  templateUrl: './tipoproducto.component.html',
  styleUrls: ['./tipoproducto.component.css']
})
export class TipoproductoComponent {
  constructor (private tipoService: TipoService) {}

  ngOnInit(): void {
    this.getTipos();
  }

  descripcion: string = '';

  tipos: RespuestaTipos = { message: '', data: [] };

  getTipos(): void {
    this.tipoService.getTipos().subscribe(response => {this.tipos = response, console.log('Tipos en el componente:', this.tipos)});
  }

  agregarNuevoTipo(): void {
    const idTipo = (this.tipos.data.reduce((max, tipo) => (tipo.idTipo > max ? tipo.idTipo: max), this.tipos.data[0].idTipo)) + 1;
    const descripcion = this.descripcion;

    const tipo:TipoProducto = {idTipo, descripcion}

    this.tipoService.agregarTipo(tipo).subscribe((data) => {return data})
    this.getTipos();
  }

  borrarTipo(tipo: TipoProducto): void {
    this.tipoService.borrarTipo(tipo.idTipo).subscribe((data) => {return data})
    this.getTipos();
  }
}
