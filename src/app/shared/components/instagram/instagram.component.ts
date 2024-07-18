import { Component, ViewEncapsulation } from '@angular/core';

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
  encapsulation: ViewEncapsulation.None,
})
export class InstagramComponent {
  breakpoint = 0;

  data: InstagramImage[] = [
    { img: '../../../../assets/image/instagram1.webp' },
    { img: '../../../../assets/image/instagram2.webp' },
    { img: '../../../../assets/image/instagram3.webp' },
    { img: '../../../../assets/image/instagram4.webp' },
    { img: '../../../../assets/image/instagram5.webp' },
    { img: '../../../../assets/image/instagram6.webp' },
  ];

  // Check the breakpoints
  ngOnInit(): void {
    this.breakpoint = window.innerWidth;
  }

  // Resize window
  onResize(event: any) {
    this.breakpoint = event.target.innerWidth;
  }
}
