import { Categoria } from "../categorias/icategoria";

export interface Cliente {
  idCliente: number,
  nombre: string,
  apellido: string,
  telefono: string,
  email: string,
  direccion: string,
  cuit: string,
  categoria: Categoria
}

export interface RespuestaClientes {
  message: string;
  data: Cliente[];
}