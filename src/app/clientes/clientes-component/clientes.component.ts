import { Component } from '@angular/core';
import { Cliente } from '../icliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor (private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  email: string = '';
  direccion: string = '';
  cuit: string = '';
  categoria: string = '';
  clientes: Cliente[] = []

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }
  
  agregarNuevoCliente(): void{
    const idCliente = (this.clientes.length) + 1;
    const nombre = this.nombre;
    const apellido = this.apellido;
    const telefono = this.telefono;
    const email = this.email;
    const direccion = this.direccion;
    const cuit = this.cuit;
    let idCategoria = 0;
    switch (this.categoria) {
      case 'Minorista':
        idCategoria = 1
        break;

      case 'Mayorista':
        idCategoria = 2
        break;
    }
    const cliente:Cliente = {idCliente, nombre, apellido, telefono, email, direccion, cuit, idCategoria}

    this.clienteService.agregarCliente(cliente);
    this.clientes.push(cliente);
// estos ultimos 2 van en agregarCliente o en clienteSubmit ??
  }
  clienteSubmit(){
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.email = '';
    this.direccion = '';
    this.cuit = '';
    this.categoria = '';
  }
}
