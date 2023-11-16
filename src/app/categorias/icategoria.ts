export interface Categoria {
  idCategoria: number,
  descripcion: string
}

export interface RespuestaCategorias {
  message: string;
  data: Categoria[];
}