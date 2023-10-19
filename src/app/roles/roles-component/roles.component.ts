import { Component } from '@angular/core';
import { Rol } from '../irol';
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
  roles: Rol[] = []

  getRoles(): void {
    this.rolService.getRoles().subscribe(roles => this.roles = roles);
  }

  agregarNuevoRol(): void {
    const idRol = (this.roles.length) + 1;
    const descripcion = this.descripcion;

    const rol:Rol = {idRol, descripcion}

    this.rolService.agregarRol(rol);
    this.roles.push(rol);
  }
}
