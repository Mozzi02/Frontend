export interface Rol {
  idRol: number,
  descripcion: string
}

export interface RespuestaRoles {
  message: string;
  data: Rol[];
}