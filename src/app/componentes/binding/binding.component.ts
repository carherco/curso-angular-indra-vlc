import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  num1 = 8;
  num2 = 19;
  resultado;

  usuarios: string[] = [
    'Carlos',
    'Marta',
    'Luis'
  ];

  constructor() {
    this.nombre = 'Carlos';
    this.apellido = 'Herrera';

    setTimeout( () => this.nombre = 'Pedro', 3000);
  }

  ngOnInit() {
  }

  public nombreCompleto() {
    return this.nombre + ' ' + this.apellido;
  }

  cambiarNombre(nombre: string) {
    this.nombre = nombre;
  }

}



// https://github.com/carherco/curso-angular
