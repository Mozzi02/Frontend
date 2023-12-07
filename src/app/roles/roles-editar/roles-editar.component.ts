import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from '../rol.service';
import { Rol } from '../irol';

@Component({
  selector: 'app-roles-editar',
  templateUrl: './roles-editar.component.html',
  styleUrls: ['./roles-editar.component.css']
})
export class RolesEditarComponent {
  constructor (private router: Router, private rolService: RolService){}

  rol: Rol = {idRol: 0, descripcion: ''};

  cargandoRol: boolean = true;

  ngOnInit(): void {
    const rol = history.state.rol;

    if(rol){
      this.rol = rol;
      this.cargandoRol = false;
    }
  }

  confirmarCambios(){
    this.rolService.editarRol(this.rol).subscribe((data) => {return data});
    this.router.navigate(['/roles']);
  }
}
