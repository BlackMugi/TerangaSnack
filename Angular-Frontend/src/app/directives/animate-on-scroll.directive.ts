import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2 ) {}
  ngAfterViewInit(): void{
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (target.classList.contains('info-card')) {
            this.renderer.addClass(target, 'animate-left');
          }
          if (target.classList.contains('contact-form')) {
            this.renderer.addClass(target, 'animate-right');
          }
        } else {
          this.renderer.removeClass(target, 'animate-left');
          this.renderer.removeClass(target, 'animate-right');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement);
  }
}