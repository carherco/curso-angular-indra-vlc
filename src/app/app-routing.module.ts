import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from 'src/app/componentes/usuarios/usuarios.component';
import { GaleriaComponent } from 'src/app/componentes/galeria/galeria.component';
import { BindingComponent } from 'src/app/componentes/binding/binding.component';
import { UsuariosMasterComponent } from 'src/app/componentes/usuarios-master/usuarios-master.component';
import { TemplateFormComponent } from 'src/app/componentes/template-form/template-form.component';
import { TemplateVariablesComponent } from 'src/app/componentes/template-variables/template-variables.component';
import { ObservablesComponent } from 'src/app/componentes/observables/observables.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ConfirmGuard } from 'src/app/guards/confirm.guard';
import { ReactiveFormComponent } from 'src/app/componentes/reactive-form/reactive-form.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'galeria', pathMatch: 'full'},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'usuarios2', component: UsuariosMasterComponent},
  { path: 'galeria', component: GaleriaComponent, canActivate: [AuthGuard]},
  { path: 'binding', component: BindingComponent },
  // { path: 'admin', component: AdminHomeComponent, canActivateChild: [AuthGuard], children: [
  //   { path: 'usuarios/listado', component: UsuariosComponent},
  //   { path: 'clientes/listado', component: ClientesComponent},
  //   { path: 'proveedores/listado', component: ProveedoresComponent},
  // ] },
  // { path: 'admin', loadChildren: 'src/app/modules/admin/admin.module.ts' }
  // { path: 'heroes/:company', component: HeroesComponent},
  // { path: 'heroes/marvel', component: HeroesComponent, data: {title: 'Marvel', company: 'marvel'}},
  // { path: 'heroes/dc', component: HeroesComponent, data: {title: 'DC', company: 'dc'}},
  { path: 'usuarios/edit/:id', component: TemplateFormComponent, canActivate: [AuthGuard], canDeactivate: [ConfirmGuard]},
  { path: 'usuarios/edit-reactivo/:id', component: ReactiveFormComponent},
  { path: 'template-variables', component: TemplateVariablesComponent},
  { path: 'observables', component: ObservablesComponent},
  { path: '**', component: ObservablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
