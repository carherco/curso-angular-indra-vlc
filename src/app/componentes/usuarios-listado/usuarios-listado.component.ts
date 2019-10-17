import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.css']
})
export class UsuariosListadoComponent implements OnInit {

  @Input() users: User[];
  @Input() selectedUser: User;

  @Output() selectEvent: EventEmitter<User> = new EventEmitter();
  @Output() editEvent: EventEmitter<User> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor() {
    console.log('constructor del Listado');
  }

  ngOnInit() {
    // console.log('OnInit del Listado');
  }

  // ngOnChanges() {
  //   console.log('OnChanges del Listado');
  // }

  // ngDoCheck() {
  //   console.log('DoCheck del Listado');
  // }

  // ngOnDestroy() {
  //   console.log('OnDestroy del Listado');
  // }

  select(user: User) {
    this.selectEvent.emit(user);
  }

  edit(user: User) {
    this.editEvent.emit(user);
  }

  delete(user: User) {
    this.deleteEvent.emit(user);
  }

}
