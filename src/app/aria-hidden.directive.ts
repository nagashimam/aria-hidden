import { Directive, ElementRef } from '@angular/core';
import { AriaHiddenQuery } from '../../state/aria-hidden.query';

@Directive({
  selector: '[appAriaHidden]',
})
export class AriaHiddenDirective {
  constructor(private query: AriaHiddenQuery, private el: ElementRef) {
    this.query.select().subscribe((hidden) => {
      const ariaHiddenAttr = hidden ? 'true' : 'false';
      const nativeEl = this.el.nativeElement as HTMLElement;
      nativeEl.setAttribute('aria-hidden', ariaHiddenAttr);
    });
  }
}
