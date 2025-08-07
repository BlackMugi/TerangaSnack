import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [AnimateOnScrollDirective],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (target.classList.contains('contact-form')) {
            this.renderer.addClass(target, 'animate-right');
          }
        } else {
          this.renderer.removeClass(target, 'animate-right');
        }
      });
    }, { threshold: 0.3 });

    const form = this.el.nativeElement.querySelector('.contact-form');
    
    if (form) observer.observe(form);
  }
}
