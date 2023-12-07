import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../icategoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-editar',
  templateUrl: './categorias-editar.component.html',
  styleUrls: ['./categorias-editar.component.css']
})

export class CategoriasEditarComponent {
  constructor(private router: Router, private categoriaService: CategoriaService){}

  categoria: Categoria = {idCategoria: 0, descripcion: ''}
  cargandoCategoria: boolean = true;

  ngOnInit(): void {
    const categoria = history.state.categoria;
    if (categoria){
      this.categoria = categoria;
      this.cargandoCategoria = false;
    }
  }

  confirmarCambios(): void {
    this.categoriaService.editarCategoria(this.categoria).subscribe((data) => {return data});
    this.router.navigate(['/categorias']);
  }
}
