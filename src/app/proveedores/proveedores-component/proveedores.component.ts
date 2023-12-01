import { Component } from '@angular/core';
import { Proveedor, RespuestaProveedores } from '../iproveedor';
import { ProveedorService } from '../proveedor.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  constructor (private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.getProveedores();
  }

  cuit: string = '';
  razonSocial: string = '';
  telefono: string = '';
  email: string = '';

  proveedores: RespuestaProveedores = { message: '', data: [] };

  getProveedores(): void {
    this.proveedorService.getProveedores().subscribe(response => {this.proveedores = response, console.log('Proveedores en el componente:', this.proveedores)});
  }

  agregarNuevoProveedor(): void {
    const idProveedor = (this.proveedores.data.reduce((max, proveedor) => (proveedor.idProveedor > max ? proveedor.idProveedor: max), this.proveedores.data[0].idProveedor)) + 1;
    const cuit = this.cuit;
    const razonSocial = this.razonSocial;
    const telefono = this.telefono;
    const email = this.email;

    const proveedor:Proveedor = {idProveedor, cuit, razonSocial, telefono, email}

    this.proveedorService.agregarProveedor(proveedor).subscribe((data) => {return data});
    this.getProveedores();
  }

  borrarProveedor(proveedor: Proveedor){
    this.proveedorService.borrarProveedor(proveedor.idProveedor).subscribe((data) => {return data});
    this.getProveedores();
}
}