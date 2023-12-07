import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { EmpleadoService } from 'src/app/empleados/empleado.service';
import { VentaService } from '../venta.service';
import { Empleado, RespuestaEmpleados } from 'src/app/empleados/iempleado';
import { Cliente, RespuestaClientes } from 'src/app/clientes/icliente';
import { Rol } from 'src/app/roles/irol';
import { Categoria } from 'src/app/categorias/icategoria';
import { Venta } from '../iventa';
import { Linea_de_venta, RespuestaLineas } from 'src/app/lineadeventa/ilineadeventa';
import { LineaService } from 'src/app/lineadeventa/linea.service';

@Component({
  selector: 'app-ventas-editar',
  templateUrl: './ventas-editar.component.html',
  styleUrls: ['./ventas-editar.component.css']
})
export class VentasEditarComponent {
  constructor(private router: Router, private lineaService: LineaService, private empleadoService: EmpleadoService, private clienteService: ClienteService, private ventaService: VentaService){}

  lineas: RespuestaLineas = {message: '', data: []}

  empleados: RespuestaEmpleados = {message: '', data: []};
  clientes: RespuestaClientes = {message: '', data: []};

  rol: Rol = {idRol: 0, descripcion: ''};
  empleado: Empleado = {idEmpleado: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', dni: '', rol: this.rol, password: ''}

  categoria: Categoria = {idCategoria: 0, descripcion: ''};
  cliente: Cliente = {idCliente: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', cuit: '', categoria: this.categoria}

  venta: Venta = {idVenta: 0, fechaVenta: new Date(), empleado: this.empleado, cliente: this.cliente};

  cargandoVenta = true;

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(response => {this.empleados = response});
    this.clienteService.getClientes().subscribe(response => {this.clientes = response});

    const venta = history.state.venta;

    if(venta){
      this.venta = venta;
      this.cargandoVenta = false;
    }

    this.lineaService.getLineasDeLaVenta(this.venta).subscribe(response => {this.lineas = response});
  }

  editarLinea(linea: Linea_de_venta): void {
    this.router.navigate(['/lineas', linea.idLineaVenta], {state: {linea}})
  }

  borrarLinea(linea: Linea_de_venta): void {
    this.lineaService.borrarLinea(linea.idLineaVenta).subscribe((data) => {return data})

    location.reload();
  }

  confirmarCambios(): void {
    this.ventaService.editarVenta(this.venta).subscribe((data) => {return data});
    this.router.navigate(['/ventas']);
  }
}
