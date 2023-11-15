import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    /* const categorias = [
      {idCategoria: 1, descripcion: "Minorista"},
      {idCategoria: 2, descripcion: "Mayorista"}
    ]; */

    const clientes = [
      {idCliente: 1, nombre: "John", apellido: "Doe", telefono: "341 1111111", email: "johndoe@gmail.com", direccion: "Salta 1500", cuit: "111", idCategoria: 1},
      {idCliente: 2, nombre: "Armando", apellido: "Banquitos", telefono: "341 2222222", email: "armandobanquitos@gmail.com", direccion: "Mitre 3000", cuit: "222", idCategoria: 2},
      {idCliente: 3, nombre: "Armando", apellido: "Paredes", telefono: "341 3333333", email: "armandoparedes@gmail.com", direccion: "Tucuman 2000", cuit: "333", idCategoria: 1},
      {idCliente: 4, nombre: "Aquiles", apellido: "Bailo", telefono: "341 4444444", email: "aquilesbailo@gmail.com", direccion: "Urquiza 1750", cuit: "444", idCategoria: 2},
      {idCliente: 5, nombre: "Aquiles", apellido: "Canto", telefono: "341 5555555", email: "aquilescanto@gmail.com", direccion: "Rioja 3000", cuit: "555", idCategoria: 1},
      {idCliente: 6, nombre: "Benito", apellido: "Camela", telefono: "341 6666666", email: "benitocamela@gmail.com", direccion: "Moreno 750", cuit: "666", idCategoria: 2}
    ];

    const empleados = [
      {idEmpleado: 1, nombre: "Juan Bautista", apellido: "Grau", telefono: "3329630374", email: "graujb@gmail.com", direccion: "Mendoza 3456", dni: "44555666", idRol: 1, password: "123456"},
      {idEmpleado: 2, nombre: "Feliciano", apellido: "Mozzi", telefono: "3329405244", email: "felicianomozzi02@gmail.com", direccion: "Moreno 1358", dni: "44114394", idRol: 1, password: "123456"},
      {idEmpleado: 3, nombre: "Ayelen", apellido: "Aimar", telefono: "3401531527", email: "ayeaimar@gmail.com", direccion: "Rioja 1234", dni: "43214321", idRol: 1, password: "123456"},
      {idEmpleado: 4, nombre: "Claudio", apellido: "Mozzi", telefono: "3329581427", email: "claudiomozzi@gmail.com", direccion: "Saavedra 473", dni: "16301960", idRol: 2, password: "123456"},
      {idEmpleado: 5, nombre: "Sergio", apellido: "Rochetti", telefono: "3329151515", email: "sergiorochetti@gmail.com", direccion: "Castro 1145", dni: "16444185", idRol: 2, password: "123456"},
    ];

    const lineasdeventa = [
      {idLineaVenta: 1, cantProducto: 2, idVenta: 6, idProducto: 1},
      {idLineaVenta: 2, cantProducto: 4, idVenta: 6, idProducto: 2},
      {idLineaVenta: 3, cantProducto: 1, idVenta: 6, idProducto: 3},
      {idLineaVenta: 4, cantProducto: 1, idVenta: 4, idProducto: 2},
      {idLineaVenta: 5, cantProducto: 5, idVenta: 4, idProducto: 3},
      {idLineaVenta: 6, cantProducto: 7, idVenta: 2, idProducto: 1}
    ];

    const pedidos = [
      {idPedido: 1, fechaPedido: "2023-04-11 00:00:00", idEmpleado: 1, idProveedor: 1, cantidad: 10, idProducto: 1},
      {idPedido: 2, fechaPedido: "2023-04-15 00:00:00", idEmpleado: 3, idProveedor: 1, cantidad: 10, idProducto: 2},
      {idPedido: 3, fechaPedido: "2023-06-12 00:00:00", idEmpleado: 2, idProveedor: 5, cantidad: 10, idProducto: 3},
      {idPedido: 4, fechaPedido: "2023-06-15 00:00:00", idEmpleado: 2, idProveedor: 4, cantidad: 10, idProducto: 4},
      {idPedido: 5, fechaPedido: "2023-07-18 00:00:00", idEmpleado: 3, idProveedor: 2, cantidad: 10, idProducto: 5}
    ];

    const productos = [
      {idProducto: 1, descripcion: "Campera Carmela Jean", precio: 49250, idTipo: 1, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/ac73e644-c71e-4ded-8645-3a604bf31071-587174e9e6b529f7ff16474526427284-640-0.jpeg"},
      {idProducto: 2, descripcion: "Campera Malaika", precio: 35000, idTipo: 1, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/53ccce25-6f41-4b1e-ba75-7a11b190c264-f7d1cd94eff3c038db16449445677288-320-0.jpeg"},
      {idProducto: 3, descripcion: "Gorrito Dublin Negro", precio: 6200, idTipo: 2, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/b57316f7-af4d-403f-b433-2c907d3f7bbb-60c8f6bdc4a20d358f16538532292346-320-0.jpeg"},
      {idProducto: 4, descripcion: "Gorrito Dublin Blanco", precio: 6200, idTipo: 2, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/img_96931-90afe093f30536b4b216814962024518-320-0.webp"},
      {idProducto: 5, descripcion: "Texanas Not Joseph", precio: 39000, idTipo: 3, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/img_50251-465fae6e300387be9016819211074570-320-0.webp"},
      {idProducto: 6, descripcion: "Texanas Valentina Mazzi", precio: 41500, idTipo: 3, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/img_51351-30c7555ef0e561592a16927413544056-320-0.webp"},
      {idProducto: 7, descripcion: "Mom Zaira", precio: 25500, idTipo: 4, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/img_1046_jpg1-05ece270132c022f3416886063761656-320-0.webp"},
      {idProducto: 8, descripcion: "Mom Canario Desplumado Negro", precio: 21900, idTipo: 4, stock: 10, imagen: "https://acdn.mitiendanube.com/stores/002/038/548/products/005e64c9-cf0e-4c84-82da-b3f75dcbbf141-7ace1c3c73276103e916776099711641-320-0.webp"}
    ];

    const proveedores = [
      {idProveedor: 1, cuit: "111", razonSocial: "Tráigame Eso", telefono: "3411212121", email: "traigameeso@gmail.com"},
      {idProveedor: 2, cuit: "222", razonSocial: "Buenos Amigos", telefono: "3412323232", email: "buenosamigos@gmail.com"},
      {idProveedor: 3, cuit: "333", razonSocial: "Zara", telefono: "3413434343", email: "zara@gmail.com"},
      {idProveedor: 4, cuit: "444", razonSocial: "Cardon", telefono: "3414545454", email: "cardon@gmail.com"},
      {idProveedor: 5, cuit: "555", razonSocial: "Kingston", telefono: "3415656565", email: "Kingston@gmail.com"},
      {idProveedor: 6, cuit: "666", razonSocial: "A todo moda", telefono: "3416767676", email: "atodomoda@gmail.com"},
    ];

    const roles = [
      {idRol: 1, descripcion: "Administrador"},
      {idRol: 2, descripcion: "Empleado"}
    ];

    const tipos = [
      {idTipo: 1, descripcion: "Camperas"},
      {idTipo: 2, descripcion: "Gorros"},
      {idTipo: 3, descripcion: "Calzados"},
      {idTipo: 4, descripcion: "Pantalones"},
    ];

    const ventas = [
      {idVenta: 1, fechaVenta: "2023-05-15 00:00:00", idCliente: 1, idEmpleado: 1},
      {idVenta: 2, fechaVenta: "2023-05-15 00:00:00", idCliente: 2, idEmpleado: 1},
      {idVenta: 3, fechaVenta: "2023-05-17 00:00:00", idCliente: 2, idEmpleado: 5},
      {idVenta: 4, fechaVenta: "2023-03-15 00:00:00", idCliente: 3, idEmpleado: 3},
      {idVenta: 5, fechaVenta: "2023-05-21 00:00:00", idCliente: 3, idEmpleado: 4},
      {idVenta: 6, fechaVenta: "2023-07-12 00:00:00", idCliente: 4, idEmpleado: 2},
    ];

    return {clientes, empleados, lineasdeventa, pedidos, proveedores, roles, tipos, ventas};
  }
}
