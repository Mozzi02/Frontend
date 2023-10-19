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

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:idProducto', component: ProductosEditarComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'tipos', component: TipoproductoComponent },
  { path: 'perfil', component: MiperfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
