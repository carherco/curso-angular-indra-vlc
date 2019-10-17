import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { USERS } from 'src/app/data/users';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: User[] = USERS;
  newUser: User;
  selectedUser: User;

  constructor() {
    this.newUser = new User(11);
  }

  ngOnInit() {
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

}
