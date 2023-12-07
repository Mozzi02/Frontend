import { Component } from '@angular/core';
import { Cliente, RespuestaClientes } from '../icliente';
import { ClienteService } from '../cliente.service';
import { Categoria, RespuestaCategorias } from 'src/app/categorias/icategoria';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor (private clienteService: ClienteService, private categoriaService: CategoriaService, private router: Router) {}
  
  ngOnInit(): void {
    this.getClientes();
    this.categoriaService.getCategorias().subscribe(response => {this.categorias = response});
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
    this.clienteService.getClientes().subscribe(response => {this.clientes = response});
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

    this.clienteService.agregarCliente(cliente).subscribe((data) => {return data});

    location.reload();
  }

  editarCliente(cliente: Cliente): void{
    this.router.navigate(['/clientes', cliente.idCliente], {state: {cliente}})
  }

  borrarCliente(cliente: Cliente): void{
    this.clienteService.borrarCliente(cliente.idCliente).subscribe((data) => {return data});
    
    location.reload();
  }
}
