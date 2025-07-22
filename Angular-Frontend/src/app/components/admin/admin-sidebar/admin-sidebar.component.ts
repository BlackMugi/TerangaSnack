import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  imports: [NgIf],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  collapsed = signal(false); 

  toggleSidebar() {
    this.collapsed.update(value => !value);
  }
}
