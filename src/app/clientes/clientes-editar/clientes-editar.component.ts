import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { Cliente } from '../icliente';
import { Categoria, RespuestaCategorias } from 'src/app/categorias/icategoria';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-editar',
  templateUrl: './clientes-editar.component.html',
  styleUrls: ['./clientes-editar.component.css']
})
export class ClientesEditarComponent {
  constructor(private router: Router, private categoriaService: CategoriaService, private clienteService: ClienteService){}

  categorias: RespuestaCategorias = {message: '', data: []};

  categoria: Categoria = {idCategoria: 0, descripcion: ''}
  cliente: Cliente = {idCliente: 0, nombre: '', apellido: '', telefono: '', email: '', direccion: '', cuit: '', categoria: this.categoria}

  cargandoCliente: boolean = true;

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(response => {this.categorias = response});
    const cliente = history.state.cliente;
    if(cliente) {
      this.cliente = cliente;
      this.cargandoCliente = false;
    }
  }

  confirmarCambios(): void {
    this.clienteService.editarCliente(this.cliente).subscribe((data) => {return data});
    this.router.navigate(['/clientes']);
  }
}
