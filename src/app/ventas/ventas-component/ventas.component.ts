import { Component } from '@angular/core';
import { RespuestaVentas, Venta } from '../iventa';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor (private ventaService: VentaService) {}

  ngOnInit(): void {
    this.getVentas();
  }

  fechaVenta: string = '';
  idCliente: string = '';
  idEmpleado: string = '';
  ventas: RespuestaVentas = { message: '', data: [] };

  getVentas(): void {
    this.ventaService.getVentas().subscribe(response => {this.ventas = response, console.log('Ventas en el componente:', this.ventas)});
  }

    agregarNuevaVenta(): void {
      /*
    const idVenta = (this.ventas.length) + 1;
    const fechaVenta = this.fechaVenta;
    const idCliente = Number(this.idCliente);
    const idEmpleado = Number(this.idEmpleado);

    const venta:Venta = {idVenta, fechaVenta, idCliente, idEmpleado}

    this.ventaService.agregarVenta(venta);
    this.ventas.push(venta);
    */
  }
  ventaSubmit() {
    /*
    this.fechaVenta = '';
    this.idCliente = '';
    this.idEmpleado = '';
    */
} 
}
