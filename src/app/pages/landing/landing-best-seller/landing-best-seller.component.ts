import { Router } from '@angular/router';
import { Component } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

// Core
import { ProductCategoriesBest } from '../../../core/defaultValues/product';

export interface Categories {
  text: string;
  image: string;
  color: string;
}

@Component({
  selector: 'app-landing-best-seller',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatGridListModule],
  templateUrl: './landing-best-seller.component.html',
  styleUrl: './landing-best-seller.component.sass',
})
export class LandingBestSellerComponent {
  categories = ProductCategoriesBest;
  breakpoint = false;

  constructor(public router: Router) {}

  // Check the breakpoints
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 1140;
  }

  // Resize window
  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 1140;
  }
}
