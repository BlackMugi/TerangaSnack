import { Component, HostListener, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { AdminSidebarComponent } from '../../components/admin/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, AdminSidebarComponent, NgStyle, NgIf],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  collapsed = signal(false);

  isMobile = signal(false);
  mobileSidebarOpen = signal(false);

  constructor() {
    this.checkScreenWidth();
  }

  // Toggle général
  toggleSidebar() {
    if (this.isMobile()) {
      this.mobileSidebarOpen.update(val => !val);
    } else {
      this.collapsed.update(val => !val);
    }
  }

  closeMobileSidebar() {
    this.mobileSidebarOpen.set(false);
  }

  // Écoute le redimensionnement de l'écran
  @HostListener('window:resize')
  checkScreenWidth() {
    this.isMobile.set(window.innerWidth < 768);
    if (!this.isMobile()) {
      this.mobileSidebarOpen.set(false);
    }
  }

  // Pour gérer dynamiquement le margin-left du contenu
  sidebarWidth = computed(() => {
    if (this.isMobile()) return '0px';
    return this.collapsed() ? '80px' : '300px';
  });
}
