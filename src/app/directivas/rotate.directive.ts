import { Directive, Input, ElementRef, OnInit, HostListener } from '@angular/core';

// Al hacer click, que gire 5 grados a la derecha
// Al hacer shift+click, que gire 5 grados a la izquierda
// Que se le pueda pasar una rotación inicial
// Que se pueda elegir cuántos grados gira con cada click

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective implements OnInit {

  @Input('appRotate') initialRotation = 0;

  @Input() step = 5;

  private currentRotation = this.initialRotation;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.currentRotation = +this.initialRotation;
    this.rotate(this.currentRotation);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.currentRotation -= this.step;
    } else {
      this.currentRotation += +this.step;
    }
    this.rotate(this.currentRotation);
  }

  private rotate(degrees: number) {
    console.log(degrees);
    this.el.nativeElement.style.transform = 'rotate(' + degrees + 'deg)';
  }
}



