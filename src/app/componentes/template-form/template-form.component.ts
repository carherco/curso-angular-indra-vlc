import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

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

  ngOnInit() {
  }

  guardar() {
    this.userService.save(this.user);
  }

  volver() {
    this.router.navigate(['usuarios2'])
  }

}
