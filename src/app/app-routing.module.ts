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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'clientes/:idCliente', component: ClientesEditarComponent, canActivate: [AuthGuard] },
  { path: 'productos', component: ProductosComponent, canActivate: [AuthGuard] },
  { path: 'productos/:idProducto', component: ProductosEditarComponent, canActivate: [AuthGuard] },
  { path: 'ventas', component: VentasComponent, canActivate: [AuthGuard] },
  { path: 'ventas/:idVenta', component: VentasEditarComponent, canActivate: [AuthGuard]},
  { path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'empleados/:idEmpleado', component: EmpleadosEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'categorias', component: CategoriasComponent, canActivate: [AuthGuard] },
  { path: 'categorias/:idCategoria', component: CategoriasEditarComponent, canActivate: [AuthGuard] },
  { path: 'roles', component: RolesComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'roles/:idRol', component: RolesEditarComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'pedidos/:idPedido', component: PedidosEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'proveedores/:idProveedor', component: ProveedoresEditarComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'tipos', component: TipoproductoComponent, canActivate: [AuthGuard] },
  { path: 'tipos/:idTipo', component: TipoproductoEditarComponent, canActivate: [AuthGuard]},
  { path: 'lineas', component: LineadeventaComponent, canActivate: [AuthGuard] },
  { path: 'lineas/:idLineaVenta', component: LineadeventaEditarComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
