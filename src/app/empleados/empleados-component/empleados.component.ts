import { Component } from '@angular/core';
import { Empleado, RespuestaEmpleados } from '../iempleado';
import { EmpleadoService } from '../empleado.service';
import { RespuestaRoles, Rol } from 'src/app/roles/irol';
import { RolService } from 'src/app/roles/rol.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  constructor (private empleadoService: EmpleadoService, private rolService: RolService) {}

  ngOnInit(): void {
    this.getEmpleados();
    this.getRoles();
  }

  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  email: string = '';
  direccion: string = '';
  dni: string = '';
  rol: Rol = {idRol: 1, descripcion: ''}
  password: string = '';

  empleados: RespuestaEmpleados = { message: '', data: [] };
  
  roles: RespuestaRoles = { message: '', data: []};


  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(response => {this.empleados = response, console.log('Empleados en el componente:', this.empleados)});
  }

  getRoles(): void {
    this.rolService.getRoles().subscribe(response => {this.roles = response, console.log('Roles en el componente:', this.roles)});
  }

  agregarNuevoEmpleado(): void {
    const idEmpleado = (this.empleados.data.reduce((max, empleado) => (empleado.idEmpleado > max ? empleado.idEmpleado: max), this.empleados.data[0].idEmpleado)) + 1;
    const nombre = this.nombre;
    const apellido = this.apellido;
    const telefono = this.telefono;
    const email = this.email;
    const direccion = this.direccion;
    const dni = this.dni;
    const rol = this.rol;
    const password = this.password;

    const empleado:Empleado = {idEmpleado, nombre, apellido, telefono, email, direccion, dni, rol, password}

    console.log("Empleado:", empleado);

    this.empleadoService.agregarEmpleado(empleado).subscribe((data) => {return data});
    this.getEmpleados();
  }

  borrarEmpleado(empleado: Empleado): void {
    this.empleadoService.borrarEmpleado(empleado.idEmpleado).subscribe((data) => {return data});
    this.getEmpleados();
  }
}
