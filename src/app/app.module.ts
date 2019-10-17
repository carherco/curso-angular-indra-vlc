import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './componentes/primer/primer.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HighlightDirective } from './directivas/highlight.directive';
import { RotateDirective } from './directivas/rotate.directive';
import { RotateComponent } from './componentes/rotate/rotate.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { UsuariosMasterComponent } from './componentes/usuarios-master/usuarios-master.component';
import { UsuariosDetalleComponent } from './componentes/usuarios-detalle/usuarios-detalle.component';
import { UsuariosListadoComponent } from './componentes/usuarios-listado/usuarios-listado.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoggedComponent } from './componentes/logged/logged.component';
import { TemplateFormComponent } from './componentes/template-form/template-form.component';
import { TemplateVariablesComponent } from './componentes/template-variables/template-variables.component';
import { ObservablesComponent } from './componentes/observables/observables.component';
import { ReactiveFormComponent } from './componentes/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    OtroComponent,
    BindingComponent,
    UsuariosComponent,
    HighlightDirective,
    RotateDirective,
    RotateComponent,
    PipesComponent,
    FilterPipe,
    GaleriaComponent,
    CabeceraComponent,
    MenuComponent,
    PieComponent,
    UsuariosMasterComponent,
    UsuariosDetalleComponent,
    UsuariosListadoComponent,
    LoginComponent,
    LoggedComponent,
    TemplateFormComponent,
    TemplateVariablesComponent,
    ObservablesComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
