import { Component } from '@angular/core';
import { Linea_de_venta } from '../ilineadeventa.js';

@Component({
  selector: 'app-lineadeventa',
  templateUrl: './lineadeventa.component.html',
  styleUrls: ['./lineadeventa.component.css']
})
export class LineadeventaComponent {
  idVenta: number = 0;
  idProducto: number = 0;
  cantProducto: number = 0;
  lineas: any[] = [];
  // idLineaVenta incremental por cada venta

  agregarNuevaLinea() {
  }
  borrarLinea(idLineaVenta: number) {
  }
  lineaSubmit() {
  }

  }
