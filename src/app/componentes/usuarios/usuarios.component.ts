import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { USERS } from 'src/app/data/users';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  color_en_el_ts = 'orange';

  users: User[] = USERS;
  constructor() { }

  ngOnInit() {
  }

}
