import { Component, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Dependencies
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

// Components
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-landing-banner',
  standalone: true,
  animations: [
    trigger('showText', [
      state(
        'show',
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('show => hidden', [animate('0.5s')]),
      transition('hidden => show', [animate('0.5s')]),
    ]),
  ],
  imports: [BannerComponent, MatButtonModule, MatGridListModule],
  templateUrl: './landing-banner.component.html',
  styleUrl: './landing-banner.component.sass',
})
export class LandingBannerComponent {
  title = '';
  animationShow = false;
  @ViewChild(BannerComponent, { static: true }) banner!: any;

  ngOnInit(): void {
    this.title = this.banner.slidePos;
  }

  // Handle Modal to change title value and add animation
  changeModal(shoe: string) {
    if (this.animationShow === false) {
      this.animationShow = true;

      setTimeout(() => {
        this.title = shoe;
        return (this.animationShow = false);
      }, 500);
    }

    setTimeout(() => {
      return (this.title = shoe);
    }, 500);
  }
}
