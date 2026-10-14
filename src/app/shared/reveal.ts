import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Fades an element in the first time it scrolls into view. */
@Directive({
  selector: '[lhReveal]',
  host: { class: 'reveal', '[style.--reveal-delay.ms]': 'lhReveal() || 0' },
})
export class Reveal {
  /** Delay in milliseconds, to stagger a row of cards. */
  readonly lhReveal = input<number | ''>(0);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('is-visible');
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(el);
    });
  }
}
