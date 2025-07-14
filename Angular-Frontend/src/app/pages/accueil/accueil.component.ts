import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FoodCardComponent } from '../../components/food-card/food-card.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  standalone:true,
  imports: [FoodCardComponent],
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (target.classList.contains('landing-action')) {
            this.renderer.addClass(target, 'animate-left');
          }

          if (target.classList.contains('landing-image')) {
            this.renderer.addClass(target, 'animate-right');
          }
        } else {
          this.renderer.removeClass(target, 'animate-left');
          this.renderer.removeClass(target, 'animate-right');
        }
      });
    }, { threshold: 0.3 });

    const action = this.el.nativeElement.querySelector('.landing-action');
    const image = this.el.nativeElement.querySelector('.landing-image');

    if (action) observer.observe(action);
    if (image) observer.observe(image);
  }
}
