import { Component } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
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
  tiles: Tile[] = [
    {
      text: 'Sport',
      image: '../../assets/image/landing_bestSeller_shoe1.webp',
      color: '#82e5f0',
    },
    {
      text: 'Sneaker',
      image: '../../assets/image/landing_bestSeller_shoe2.webp',
      color: '#9fd7f0',
    },
    {
      text: 'Classic',
      image: '../../assets/image/landing_bestSeller_shoe3.webp',
      color: '#ff6b61',
    },
  ];
}
