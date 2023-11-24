import { Component } from '@angular/core';
import { RespuestaRoles, Rol } from '../irol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  constructor (private rolService: RolService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  descripcion: string = '';
  roles: RespuestaRoles = { message: '', data: [] };

  getRoles(): void {
    this.rolService.getRoles().subscribe(response => {this.roles = response, console.log('Roles en el componente:', this.roles)});
  }

  agregarNuevoRol(): void {
    /*
    const idRol = (this.roles.length) + 1;
    const descripcion = this.descripcion;

    const rol:Rol = {idRol, descripcion}

    this.rolService.agregarRol(rol);
    this.roles.push(rol);
    */
  }
  rolSubmit() {
    /*
    this.descripcion = '';
    */
  }
}
