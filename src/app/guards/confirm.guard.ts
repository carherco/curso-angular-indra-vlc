import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateFormComponent } from 'src/app/componentes/template-form/template-form.component';
import { TieneCambiosSinGuardar } from 'src/app/model/tiene-cambios-sin-guardar';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<TieneCambiosSinGuardar> {
  canDeactivate(
    component: TieneCambiosSinGuardar,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if (component.tieneCambiosSinGuardar()) {
        return window.confirm('Tienes cambios sin guardar. ¿Seguro que quires salir?');
      }
      return true;
  }
}
