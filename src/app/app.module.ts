import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
import { MiperfilComponent } from './miperfil/miperfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosEditarComponent } from './productos/productos-editar/productos-editar.component';
import { ProductosBusquedaComponent } from './productos/productos-busqueda/productos-busqueda.component';
import { ProveedoresBusquedaComponent } from './proveedores/proveedores-busqueda/proveedores-busqueda.component';
import { LineadeventaComponent } from './lineadeventa/lineadeventa-component/lineadeventa.component';

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
    MiperfilComponent,
    InicioComponent,
    NavbarComponent,
    ProductosEditarComponent,
    ProductosBusquedaComponent,
    ProveedoresBusquedaComponent,
    LineadeventaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }