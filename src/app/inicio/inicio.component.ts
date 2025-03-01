import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { VentaService } from '../ventas/venta.service';
import { RespuestaVentas } from '../ventas/iventa';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor (private ventaService: VentaService){}

  ventas: RespuestaVentas = {message: '', data: []};
  year: number = 0;
  yearsVisible: boolean = false;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType: ChartType  = 'bar';
  public barChartLegend = true;

  public barChartData: {data: number[], label: string}[] = [{data: [], label: 'Ventas'}]

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.genChart(this.year);
  }

  genChart(year: number): void{
    let ventasPorMes: number[] = [];
    this.ventaService.getVentasFromYear(year).subscribe(response => {
      this.ventas = response;
      this.ventas.data = response.data.map((venta) => ({
      ...venta,
      fechaVenta: new Date(venta.fechaVenta)}));

      ventasPorMes = this.ventas.data.reduce((acumulador, venta) => {
      const mes = venta.fechaVenta.getMonth();
      acumulador[mes] = (acumulador[mes] || 0) + 1;

      return acumulador;
    }, Array(12).fill(0));
    this.barChartData[0].data = ventasPorMes;
    this.barChartOptions = { ...this.barChartOptions }
    });
  }

  toggleMenu() {
    this.yearsVisible = !this.yearsVisible;
  }

  changeYear(year: number){
    this.year = year;
    this.genChart(this.year);
  }
}
