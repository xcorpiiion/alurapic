import { Directive, ElementRef, HostListener, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[app-darken-on-hover]'
})
export class DarkenOnHoverDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer) { }

  ngOnInit() {
  }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setElementStyle(this.elementRef.nativeElement, 'filter', 'brightness(70%)');
  }
  @HostListener('mouseleave')
  darkenOff() {
    this.render.setElementStyle(this.elementRef.nativeElement, 'filter', 'brightness(100%)');
  }

}
