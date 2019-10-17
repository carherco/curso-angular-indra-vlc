import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.component.html',
  styleUrls: ['./usuarios-detalle.component.css']
})
export class UsuariosDetalleComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  eliminarEvent: EventEmitter<User> = new EventEmitter();

  constructor() {
    console.log('constructor del Detalle');
  }

  ngOnInit() {
    // console.log('OnInit del Detalle');
  }

  // ngOnChanges() {
  //   console.log('OnChanges del Detalle');
  // }

  // ngDoCheck() {
  //   console.log('DoCheck del Detalle');
  // }

  // ngOnDestroy() {
  //   console.log('OnDestroy del Detalle');
  // }

  delete() {
    // NO tiene acceso al array
    this.eliminarEvent.emit(this.user);
  }

}
