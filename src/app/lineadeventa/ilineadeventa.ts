import { Producto } from "../productos/iproducto";
import { Venta } from "../ventas/iventa";

export interface Linea_de_venta {
  idLineaVenta: number,
  cantProducto: number,
  venta: Venta,
  producto: Producto
}