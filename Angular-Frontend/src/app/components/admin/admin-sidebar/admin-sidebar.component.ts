import { NgIf, NgClass } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterModule, NgIf, NgClass],
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  @Input() collapsed = false;
  @Input() isMobile = false;
  @Input() mobileOpen = false;
  @Output() toggle = new EventEmitter<void>();
  @Output() closeMobileSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggle.emit();
  }

  onCloseMobileSidebar() {
    this.closeMobileSidebar.emit();
  }
}
