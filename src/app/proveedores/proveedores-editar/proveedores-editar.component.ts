import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../iproveedor';

@Component({
  selector: 'app-proveedores-editar',
  templateUrl: './proveedores-editar.component.html',
  styleUrls: ['./proveedores-editar.component.css']
})
export class ProveedoresEditarComponent {
  constructor (private router: Router, private proveedorService: ProveedorService) {}

  proveedor: Proveedor = {idProveedor: 0, cuit: '', razonSocial: '', telefono: '', email: ''}

  cargandoProveedor: boolean = true;

  ngOnInit(): void {
    const proveedor = history.state.proveedor

    if(proveedor){
      this.proveedor = proveedor;
      this.cargandoProveedor = false;
    }
  }

  confirmarCambios(): void {
    this.proveedorService.editarProveedor(this.proveedor).subscribe((data) => {return data})
    this.router.navigate(['/proveedores']);
  }
}
