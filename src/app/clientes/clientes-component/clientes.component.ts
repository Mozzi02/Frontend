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
  categoria: string = 'Minorista';
  clientes: Cliente[] = []
  idCategoria: number = 0;

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
    const idCategoria: number= (this.categoria == 'Minorista') ? 1 : (this.categoria == 'Mayorista') ? 2: 0;

    const cliente:Cliente = {idCliente, nombre, apellido, telefono, email, direccion, cuit, idCategoria}

    this.clienteService.agregarCliente(cliente);
    this.clientes.push(cliente);
  }

  clienteSubmit(){
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.email = '';
    this.direccion = '';
    this.cuit = '';
    this.categoria = 'Minorista';
  }
}
