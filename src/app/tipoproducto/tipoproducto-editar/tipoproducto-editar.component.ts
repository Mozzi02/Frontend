import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoService } from '../tipo.service';
import { TipoProducto } from '../itipo';

@Component({
  selector: 'app-tipoproducto-editar',
  templateUrl: './tipoproducto-editar.component.html',
  styleUrls: ['./tipoproducto-editar.component.css']
})
export class TipoproductoEditarComponent {
  constructor (private router: Router, private tipoService: TipoService){}

  tipo: TipoProducto = {idTipo: 0, descripcion: ''};

  cargandoTipo: boolean = true;

  ngOnInit(): void {
    const tipo = history.state.tipo;
    if(tipo){
      this.tipo = tipo;
      this.cargandoTipo = false;
    }
  }

  confirmarCambios(): void {
    this.tipoService.editarTipo(this.tipo).subscribe((data) => {return data});
    this.router.navigate(['/tipos']);
  }
}
