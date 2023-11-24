import { Cliente } from "../clientes/icliente";
import { Empleado } from "../empleados/iempleado";

export interface Venta {
  idVenta: number,
  fechaVenta: string,
  cliente: Cliente,
  empleado: Empleado
}

export interface RespuestaVentas {
  message: string;
  data: Venta[];
}