import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
