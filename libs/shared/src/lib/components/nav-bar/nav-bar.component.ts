import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'sr-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}
