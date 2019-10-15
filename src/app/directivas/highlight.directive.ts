import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  color = 'yellow';

  @Input()
  duracion = 5;

  constructor(private el: ElementRef) {
    // this.highlight('red');
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(eventInfo) {
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
