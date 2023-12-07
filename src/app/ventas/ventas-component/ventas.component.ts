import { Component } from '@angular/core';
import { RespuestaVentas, Venta } from '../iventa';
import { VentaService } from '../venta.service';
import { Rol } from 'src/app/roles/irol';
import { Empleado, RespuestaEmpleados } from 'src/app/empleados/iempleado';
import { Categoria } from 'src/app/categorias/icategoria';
import { Cliente, RespuestaClientes } from 'src/app/clientes/icliente';
import { EmpleadoService } from 'src/app/empleados/empleado.service';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor (private ventaService: VentaService, private empleadoService: EmpleadoService, private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.getVentas();
    this.empleadoService.getEmpleados().subscribe(response => {this.empleados = response});
    this.clienteService.getClientes().subscribe(response => {this.clientes = response});
  }

  rol: Rol = {idRol: 0, descripcion: ''};
  empleado: Empleado = {idEmpleado: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', dni: '', rol: this.rol, password: ''}

  categoria: Categoria = {idCategoria: 0, descripcion: ''};
  cliente: Cliente = {idCliente: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', cuit: '', categoria: this.categoria}

  ventas: RespuestaVentas = { message: '', data: [] };
  clientes: RespuestaClientes = { message: '', data: []};
  empleados: RespuestaEmpleados = { message: '', data: []};

  getVentas(): void {
    this.ventaService.getVentas().subscribe(response => {this.ventas = response});
  }

  agregarNuevaVenta(): void {
    const idVenta = (this.ventas.data.reduce((max, venta) => (venta.idVenta > max ? venta.idVenta: max), this.ventas.data[0].idVenta)) + 1;
    const fechaVenta: Date = new Date();
    const empleado = this.empleado;
    const cliente = this.cliente;

    const venta:Venta = {idVenta, fechaVenta, empleado, cliente}
  
    this.router.navigate(['/lineas'], {state: {venta}})
  }

  editarVenta(venta: Venta): void {
    this.router.navigate(['/ventas', venta.idVenta], {state: {venta}});
  }

  borrarVenta(venta: Venta): void {
    this.ventaService.borrarVenta(venta.idVenta).subscribe((data) => {return data});

    location.reload();
  }
}
