import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  numero = 123.567;
  texto = 'Hola mundo';
  fecha = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
