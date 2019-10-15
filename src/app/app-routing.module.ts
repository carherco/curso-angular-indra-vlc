import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from 'src/app/componentes/usuarios/usuarios.component';
import { GaleriaComponent } from 'src/app/componentes/galeria/galeria.component';
import { BindingComponent } from 'src/app/componentes/binding/binding.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'binding', component: BindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
