import { TipoProducto } from "../tipoproducto/itipo";

export interface Producto {
  idProducto: number,
  descripcion: string,
  precio: number,
  tipoProducto: TipoProducto,
  stock: number,
  imagen: string
}

export interface RespuestaProductos {
  message: string;
  data: Producto[];
}