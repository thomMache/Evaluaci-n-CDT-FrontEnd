import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionCreditosComponent } from './components/administracion-creditos/administracion-creditos.component';
import { AdministracionPlazosComponent } from './components/administracion-plazos/administracion-plazos.component';
import { AdministracionProductosComponent } from './components/administracion-productos/administracion-productos.component';
import { ProductoFormComponent } from './components/administracion-productos/producto-form.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'productos'},
  {path:'productos', component:AdministracionProductosComponent},
  {path:'productos/form', component:ProductoFormComponent},
  {path:'productos/form/:sku', component:ProductoFormComponent},
    {path:'plazos', component:AdministracionPlazosComponent},
    {path:'creditos', component:AdministracionCreditosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
