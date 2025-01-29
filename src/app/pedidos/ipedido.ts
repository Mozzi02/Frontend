import { Empleado } from "../empleados/iempleado";
import { Producto } from "../productos/iproducto";
import { Proveedor } from "../proveedores/iproveedor";

export interface Pedido {
  idPedido: number,
  fechaPedido: Date,
  empleado: Empleado,
  proveedor: Proveedor,
  cantidad: number,
  producto: Producto,
  estado: string
}


export interface RespuestaPedidos {
  message: string;
  data: Pedido[];
}