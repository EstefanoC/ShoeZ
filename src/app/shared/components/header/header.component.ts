import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Dependencies
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

// Components
import { SearchComponent } from '../search/search.component';
import { ProductCardMinComponent } from '../product-card-min/product-card-min.component';

@Component({
  selector: 'app-header',
  standalone: true,
  animations: [
    trigger('showHeader', [
      state(
        'show',
        style({
          opacity: 1,
          top: '0',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          top: '-6rem',
        })
      ),
      transition('show => hidden', [animate('0.5s')]),
      transition('hidden => show', [animate('0.5s')]),
    ]),
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    SearchComponent,
    MatDividerModule,
    MatCheckboxModule,
    MatGridListModule,
    ProductCardMinComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  search = '';
  fav = false;
  data = {
    id: 'wish1',
    img: '../../../../assets/image/products/Jordan 11 Retro Low IE White Gym Red.avif',
    title: 'Jordan 11 Retro Low IE White Gym Red',
    price: 170,
    review: 4,
    discount: 5,
  };
  @Input() headerShow = false;

  // Get theme Dark or Light
  getTheme() {
    if (typeof document !== 'undefined') {
      return document.body.classList.contains('dark-theme');
    }

    return false;
  }

  // Handle search Input
  onChangeSearch(event: Event) {
    // Get the new input value
    this.search = (event.target as HTMLInputElement).value;
  }

  // Change the theme Dark or Light
  toggleTheme() {
    // add light-theme or dark-theme class to body
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }

  // Change the wishlist popup
  toggleFav() {
    // add light-theme or dark-theme class to body
    if (document.body.classList.contains('fav_open')) {
      this.fav = false;
      document.body.classList.remove('fav_open');
    } else {
      this.fav = true;
      document.body.classList.add('fav_open');
    }
  }
}
