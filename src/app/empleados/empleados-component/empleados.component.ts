import { Component } from '@angular/core';
import { Empleado } from '../iempleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  constructor (private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  email: string = '';
  direccion: string = '';
  dni: string = '';
  rol: string = '';
  password: string = '';
  empleados: Empleado[] = []

  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(empleados => this.empleados = empleados);
  }
  
  agregarNuevoEmpleado(): void {
    const idEmpleado = (this.empleados.length) + 1;
    const nombre = this.nombre;
    const apellido = this.apellido;
    const telefono = this.telefono;
    const email = this.email;
    const direccion = this.direccion;
    const dni = this.dni;
    let idRol = 0;
    switch (this.rol) {
      case 'Administrador':
        idRol = 1
        break;

      case 'Empleado':
        idRol = 2
        break;
    }
    const password = this.password;

    const empleado:Empleado = {idEmpleado, nombre, apellido, telefono, email, direccion, dni, idRol, password}

    this.empleadoService.agregarEmpleado(empleado);
    this.empleados.push(empleado);
  }
  empleadoSubmit() {
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.email = '';
    this.direccion = '';
    this.dni = '';
    this.rol = '';
    this.password = '';
}
}
