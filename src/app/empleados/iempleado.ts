import { Rol } from "../roles/irol";

export interface Empleado {
  idEmpleado: number,
  nombre: string,
  apellido: string,
  telefono: string,
  email: string,
  direccion: string,
  dni: string,
  rol: Rol,
  password: string
}

export interface RespuestaEmpleados {
  message: string;
  data: Empleado[];
}