import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from 'src/app/roles/rol.service';
import { EmpleadoService } from '../empleado.service';
import { RespuestaRoles, Rol } from 'src/app/roles/irol';
import { Empleado } from '../iempleado';

@Component({
  selector: 'app-empleados-editar',
  templateUrl: './empleados-editar.component.html',
  styleUrls: ['./empleados-editar.component.css']
})
export class EmpleadosEditarComponent {
  constructor (private router: Router, private rolService: RolService, private empleadoService: EmpleadoService){}

  roles: RespuestaRoles = {message: '', data: []};

  rol: Rol = {idRol: 0, descripcion: ''};
  empleado: Empleado = {idEmpleado: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', dni: '', rol: this.rol, password: ''}

  cargandoEmpleado: boolean = true;

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(response => {this.roles = response});
    
    const empleado = history.state.empleado;
    
    if (empleado) {
      this.empleado = empleado;
      this.cargandoEmpleado = false;
    }
  }

  confirmarCambios(): void {
    this.empleadoService.editarEmpleado(this.empleado).subscribe((data) => {return data});
    this.router.navigate(['/empleados']);
  }
}
