import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {

  @ViewChild('valor', {static: true})
  caja: ElementRef;

  constructor() { }

  ngOnInit() {
    this.caja.nativeElement.value = 'Pedro';
  }

}
