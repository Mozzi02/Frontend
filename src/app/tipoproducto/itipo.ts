export interface TipoProducto {
  idTipo: number,
  descripcion: string
}

export interface RespuestaTipos {
  message: string;
  data: TipoProducto[];
}