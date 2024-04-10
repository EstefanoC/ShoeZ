import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  animations: [
    trigger('showScroll', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(5rem)',
        })
      ),
      transition('show => hidden', [animate('0.5s')]),
      transition('hidden => show', [animate('0.5s')]),
    ]),
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.sass',
})
export class ScrollUpComponent {
  isMenuScrolled = false;
  isSidebarShowing = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 1250) this.isMenuScrolled = true;
    else this.isMenuScrolled = false;
  }

  openSideBar() {
    this.isSidebarShowing = true;
  }

  closeSideBar() {
    this.isSidebarShowing = false;
  }

  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }
}
