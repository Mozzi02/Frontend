import { Component } from '@angular/core';
import { Categoria } from '../icategoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  constructor (private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  descripcion: string = '';
  categorias: Categoria[] = []

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
  }

  agregarNuevaCategoria(): void {
    const idCategoria = (this.categorias.length) + 1;
    const descripcion = this.descripcion;
    const categoria:Categoria = {idCategoria, descripcion}

    this.categoriaService.agregarCategoria(categoria);
    this.categorias.push(categoria);
  }
  
}
