import { Component } from '@angular/core';
import { Empleado, RespuestaEmpleados } from '../iempleado';
import { EmpleadoService } from '../empleado.service';
import { RespuestaRoles, Rol } from 'src/app/roles/irol';
import { RolService } from 'src/app/roles/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  constructor (private empleadoService: EmpleadoService, private rolService: RolService, private router: Router) {}

  ngOnInit(): void {
    this.getEmpleados();
    this.rolService.getRoles().subscribe(response => {this.roles = response});
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
    this.empleadoService.getEmpleados().subscribe(response => {this.empleados = response});
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

    this.empleadoService.agregarEmpleado(empleado).subscribe((data) => {return data});
    
    location.reload();
  }

  editarEmpleado(empleado: Empleado): void {
    this.router.navigate(['/empleados', empleado.idEmpleado], {state: {empleado}});
  }

  borrarEmpleado(empleado: Empleado): void {
    this.empleadoService.borrarEmpleado(empleado.idEmpleado).subscribe((data) => {return data});
    
    location.reload();
  }
}
