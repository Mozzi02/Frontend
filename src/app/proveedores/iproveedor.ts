export interface Proveedor {
  idProveedor: number,
  cuit: string,
  razonSocial: string,
  telefono: string,
  email: string
}

export interface RespuestaProveedores {
  message: string;
  data: Proveedor[];
}