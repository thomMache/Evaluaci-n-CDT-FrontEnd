import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionProductosComponent } from './components/administracion-productos/administracion-productos.component';
import { AdministracionPlazosComponent } from './components/administracion-plazos/administracion-plazos.component';
import { AdministracionCreditosComponent } from './components/administracion-creditos/administracion-creditos.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductoFormComponent } from './components/administracion-productos/producto-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdministracionProductosComponent,
    AdministracionPlazosComponent,
    AdministracionCreditosComponent,
    ProductoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
