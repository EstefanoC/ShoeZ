import { Component } from '@angular/core';

// Dependencies
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

// Core
import { InstagramImage } from '../../../core/models/instagram.interface';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.sass',
})
export class InstagramComponent {
  data: InstagramImage[] = [
    { img: '../../../../assets/image/instagram1.webp' },
    { img: '../../../../assets/image/instagram2.webp' },
    { img: '../../../../assets/image/instagram3.webp' },
    { img: '../../../../assets/image/instagram4.webp' },
    { img: '../../../../assets/image/instagram5.webp' },
    { img: '../../../../assets/image/instagram6.webp' },
  ];
}
