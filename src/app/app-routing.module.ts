import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos-component/productos.component';
import { ClientesComponent } from './clientes/clientes-component/clientes.component';
import { VentasComponent } from './ventas/ventas-component/ventas.component';
import { PedidosComponent } from './pedidos/pedidos-component/pedidos.component';
import { EmpleadosComponent } from './empleados/empleados-component/empleados.component';
import { CategoriasComponent } from './categorias/categorias-component/categorias.component';
import { RolesComponent } from './roles/roles-component/roles.component';
import { ProveedoresComponent } from './proveedores/proveedores-component/proveedores.component';
import { TipoproductoComponent } from './tipoproducto/tipoproducto-component/tipoproducto.component';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosEditarComponent } from './productos/productos-editar/productos-editar.component';
import { ClientesEditarComponent } from './clientes/clientes-editar/clientes-editar.component';
import { ProveedoresEditarComponent } from './proveedores/proveedores-editar/proveedores-editar.component';
import { CategoriasEditarComponent } from './categorias/categorias-editar/categorias-editar.component';
import { EmpleadosEditarComponent } from './empleados/empleados-editar/empleados-editar.component';
import { PedidosEditarComponent } from './pedidos/pedidos-editar/pedidos-editar.component';
import { RolesEditarComponent } from './roles/roles-editar/roles-editar.component';
import { LineadeventaComponent } from './lineadeventa/lineadeventa-component/lineadeventa.component';
import { TipoproductoEditarComponent } from './tipoproducto/tipoproducto-editar/tipoproducto-editar.component';
import { VentasEditarComponent } from './ventas/ventas-editar/ventas-editar.component';
import { LineadeventaEditarComponent } from './lineadeventa/lineadeventa-editar/lineadeventa-editar.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/:idCliente', component: ClientesEditarComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:idProducto', component: ProductosEditarComponent },
  { path: 'ventas', component: VentasComponent },
  {path: 'ventas/:idVenta', component: VentasEditarComponent},
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'empleados/:idEmpleado', component: EmpleadosEditarComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/:idCategoria', component: CategoriasEditarComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'roles/:idRol', component: RolesEditarComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pedidos/:idPedido', component: PedidosEditarComponent},
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'proveedores/:idProveedor', component: ProveedoresEditarComponent },
  { path: 'tipos', component: TipoproductoComponent },
  { path: 'tipos/:idTipo', component: TipoproductoEditarComponent},
  { path: 'perfil', component: MiperfilComponent },
  { path: 'lineas', component: LineadeventaComponent },
  { path: 'lineas/:idLineaVenta', component: LineadeventaEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
