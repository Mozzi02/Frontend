import { Component } from '@angular/core';
import { RespuestaRoles, Rol } from '../irol';
import { RolService } from '../rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  constructor (private rolService: RolService, private router: Router) {}

  ngOnInit(): void {
    this.getRoles();
  }

  descripcion: string = '';

  roles: RespuestaRoles = { message: '', data: [] };

  getRoles(): void {
    this.rolService.getRoles().subscribe(response => {this.roles = response});
  }

  agregarNuevoRol(): void {
    const idRol = (this.roles.data.reduce((max, rol) => (rol.idRol > max ? rol.idRol: max), this.roles.data[0].idRol)) + 1;
    const descripcion = this.descripcion;

    const rol:Rol = {idRol, descripcion}

    this.rolService.agregarRol(rol).subscribe((data) => {return data})
    location.reload();
  }

  editarRol(rol: Rol): void {
    this.router.navigate(['/roles', rol.idRol], {state: {rol}});
  }

  borrarRol(rol: Rol): void {
    this.rolService.borrarRol(rol.idRol).subscribe((data) => {return data})
    location.reload();
  }
}
