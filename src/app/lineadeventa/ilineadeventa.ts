import { Producto } from "../productos/iproducto";
import { Venta } from "../ventas/iventa";

export interface Linea_de_venta {
  idLineaVenta: number,
  cantidad: number,
  venta: Venta,
  producto: Producto
}

export interface RespuestaLineas {
  message: string,
  data: Linea_de_venta[]
}