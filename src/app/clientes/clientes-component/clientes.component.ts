import { Component } from '@angular/core';
import { Cliente, RespuestaClientes } from '../icliente';
import { ClienteService } from '../cliente.service';
import { Categoria, RespuestaCategorias } from 'src/app/categorias/icategoria';
import { CategoriaService } from 'src/app/categorias/categoria.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor (private clienteService: ClienteService, private categoriaService: CategoriaService) {}
  
  ngOnInit(): void {
    this.getClientes();
    this.categoriaService.getCategorias().subscribe(response => {this.categorias = response, console.log('Categorías en el componente:', this.categorias)});
  }

  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  email: string = '';
  direccion: string = '';
  cuit: string = '';
  
  clientes: RespuestaClientes = { message: '', data: [] };

  categoria: Categoria = {idCategoria: 1, descripcion: ''}
  categorias: RespuestaCategorias = { message: '', data: []};


  getClientes(): void {
    this.clienteService.getClientes().subscribe(response => {this.clientes = response, console.log('Clientes en el componente:', this.clientes)});
  }

  agregarNuevoCliente(): void{
    const idCliente = (this.clientes.data.reduce((max, cliente) => (cliente.idCliente > max ? cliente.idCliente: max), this.clientes.data[0].idCliente)) + 1;
    const nombre = this.nombre;
    const apellido = this.apellido;
    const telefono = this.telefono;
    const email = this.email;
    const direccion = this.direccion;
    const cuit = this.cuit;
    const categoria = this.categoria;

    const cliente:Cliente = {idCliente, nombre, apellido, telefono, email, direccion, cuit, categoria}

    console.log("Cliente:", cliente);

    this.clienteService.agregarCliente(cliente).subscribe((data) => {return data});
    this.getClientes();
  }

  borrarCliente(cliente: Cliente): void{
    this.clienteService.borrarCliente(cliente.idCliente).subscribe((data) => {return data});
    this.getClientes();
  }
}
