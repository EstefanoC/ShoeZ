import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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
  // @Output() isSidebarShowing = false;
  @Output() isHeaderShow = new EventEmitter<boolean>();

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    // Button to Scroll Top
    if (window.pageYOffset > 1250) this.isMenuScrolled = true;
    else this.isMenuScrolled = false;

    // Show Header
    if (window.pageYOffset > 500) this.isHeaderShow.emit(true);
    else this.isHeaderShow.emit(false);
  }

  // openSideBar() {
  //   this.isSidebarShowing = true;
  // }

  // closeSideBar() {
  //   this.isSidebarShowing = false;
  // }

  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }
}
