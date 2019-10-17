import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { TieneCambiosSinGuardar } from 'src/app/model/tiene-cambios-sin-guardar';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements TieneCambiosSinGuardar {

  user: User;
  constructor(private userService: UserService, private ruta: ActivatedRoute, private router: Router) {
    // this.user = new User();
    // this.user.address = {};

    this.ruta.params.subscribe(
      params => {
        this.userService.getOne(params.id).subscribe(
          u => this.user = u
        );
      }
    );

    // this.ruta.params.pipe( flatMap( params => this.userService.getOne(params.id) ) )
    // .subscribe( u => this.user = u );

  }

  guardar() {
    this.userService.save(this.user);
  }

  volver() {
    this.router.navigate(['usuarios2']);
  }

  tieneCambiosSinGuardar(): boolean {
    return true;
  }

}
