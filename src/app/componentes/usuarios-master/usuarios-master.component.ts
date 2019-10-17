import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/servicios/user.service';
import { fromEvent } from 'rxjs';
import { map, filter, distinct, distinctUntilChanged, debounceTime, tap, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-master',
  templateUrl: './usuarios-master.component.html',
  styleUrls: ['./usuarios-master.component.css']
})
export class UsuariosMasterComponent implements OnInit {

  users: User[] = [];
  newUser: User;
  selectedUser: User;

  @ViewChild('search', {static: true})
  inputSearch: ElementRef;

  constructor(private svc: UserService, private router: Router) {
    this.newUser = new User(11);
    this.svc.getAll().subscribe(
      x => this.users = x
    );
  }

  ngOnInit() {
    const observable$ = fromEvent(this.inputSearch.nativeElement, 'keyup');

    observable$
    .pipe(
      map( (x: any) => x.target.value ),
      // tap( x => console.log('Después de map: ', x) ),
      filter( (x: string) => x.length > 3 ),
      // tap( x => console.log('Después de filter: ', x) ),
      debounceTime(500),
      // tap( x => console.log('Después de debounceTime: ', x) ),
      distinctUntilChanged(),
      flatMap( x => this.svc.find(x) )
    )
    .subscribe(
        respuestaServer => this.users = respuestaServer
    );
  }

  select(user: User) {
    this.selectedUser = {...user};
  }

  add() {
    this.users.push(  {...this.newUser}  );
    this.users = [...this.users];
    this.newUser = new User(12);
  }

  delete(user: User) {
    this.users = this.users.filter( item => item.id !== user.id );
    this.selectedUser = null;
  }

  goToEdit(user: User) {
    const url = 'usuarios/edit/' + user.id;
    this.router.navigate([url]);
  }

}
