import { Component, signal, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgClass, ViewportScroller  } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-Frontend';

  currentUrl = signal('');

  isAdminRoute = computed(() => this.currentUrl().startsWith('/admin'));

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.urlAfterRedirects);
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }


  public get isAdmin(): boolean {
  return this.router.url.startsWith('/admin');
  }

}
