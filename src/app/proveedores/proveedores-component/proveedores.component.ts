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
    /* 
    const idProveedor = (this.proveedores.length) + 1;
    const cuit = this.cuit;
    const razonSocial = this.razonSocial;
    const telefono = this.telefono;
    const email = this.email;

    const proveedor:Proveedor = {idProveedor, cuit, razonSocial, telefono, email}

    this.proveedorService.agregarProveedor(proveedor);
    this.proveedores.push(proveedor);
    */
    
  }
  proveedorSubmit() {
    /*
    this.cuit = '';
    this.razonSocial = '';
    this.telefono = '';
    this.email = '';
    */
  }

  borrarProveedor(idProveedor:number){
    /*
    this.proveedores.splice(idProveedor,1);
    */
}
}