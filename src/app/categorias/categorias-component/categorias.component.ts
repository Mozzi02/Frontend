import { Component } from '@angular/core';
import { Categoria, RespuestaCategorias } from '../icategoria';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  constructor (private categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  descripcion: string = '';
  
  categorias: RespuestaCategorias = { message: '', data: [] };
  categoria: Categoria = {idCategoria: 0, descripcion: ''};

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(response => {this.categorias = response});
  }

  agregarNuevaCategoria(): void {
    const idCategoria = (this.categorias.data.reduce((max, categoria) => (categoria.idCategoria > max ? categoria.idCategoria: max), this.categorias.data[0].idCategoria)) + 1;
    const descripcion = this.descripcion;

    const categoria:Categoria = {idCategoria, descripcion}

    this.categoriaService.agregarCategoria(categoria).subscribe((data) => {return data});

    location.reload();
  }
  
  editarCategoria(categoria: Categoria): void {
    this.router.navigate(['/categorias', categoria.idCategoria], {state: {categoria}});
  }

  borrarCategoria(categoria: Categoria): void {
    this.categoriaService.borrarCategoria(categoria.idCategoria).subscribe((data) => {return data});
    
    location.reload();
  }
}
