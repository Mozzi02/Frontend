import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos-component/productos.component';
import { ClientesComponent } from './clientes/clientes-component/clientes.component';
import { VentasComponent } from './ventas/ventas-component/ventas.component';
import { EmpleadosComponent } from './empleados/empleados-component/empleados.component';
import { CategoriasComponent } from './categorias/categorias-component/categorias.component';
import { RolesComponent } from './roles/roles-component/roles.component';
import { PedidosComponent } from './pedidos/pedidos-component/pedidos.component';
import { ProveedoresComponent } from './proveedores/proveedores-component/proveedores.component';
import { TipoproductoComponent } from './tipoproducto/tipoproducto-component/tipoproducto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosEditarComponent } from './productos/productos-editar/productos-editar.component';
import { LineadeventaComponent } from './lineadeventa/lineadeventa-component/lineadeventa.component';
import { ClientesEditarComponent } from './clientes/clientes-editar/clientes-editar.component';
import { ProveedoresEditarComponent } from './proveedores/proveedores-editar/proveedores-editar.component';
import { CategoriasEditarComponent } from './categorias/categorias-editar/categorias-editar.component';
import { EmpleadosEditarComponent } from './empleados/empleados-editar/empleados-editar.component';
import { PedidosEditarComponent } from './pedidos/pedidos-editar/pedidos-editar.component';
import { RolesEditarComponent } from './roles/roles-editar/roles-editar.component';
import { TipoproductoEditarComponent } from './tipoproducto/tipoproducto-editar/tipoproducto-editar.component';
import { VentasEditarComponent } from './ventas/ventas-editar/ventas-editar.component';
import { LineadeventaEditarComponent } from './lineadeventa/lineadeventa-editar/lineadeventa-editar.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { enviroment } from 'enviroments/enviroment';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ClientesComponent,
    VentasComponent,
    EmpleadosComponent,
    CategoriasComponent,
    RolesComponent,
    PedidosComponent,
    ProveedoresComponent,
    TipoproductoComponent,
    InicioComponent,
    NavbarComponent,
    ProductosEditarComponent,
    LineadeventaComponent,
    ClientesEditarComponent,
    ProveedoresEditarComponent,
    CategoriasEditarComponent,
    EmpleadosEditarComponent,
    PedidosEditarComponent,
    RolesEditarComponent,
    TipoproductoEditarComponent,
    VentasEditarComponent,
    LineadeventaEditarComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('jwt'), 
        allowedDomains: [`${enviroment.BACKEND_URL}`], 
        disallowedRoutes: [] 
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
