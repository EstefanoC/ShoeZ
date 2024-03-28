import { Component } from '@angular/core';

// Components
import { LandingFlashComponent } from '../landing-flash/landing-flash.component';
import { LandingBannerComponent } from '../landing-banner/landing-banner.component';
import { LandingBestSellerComponent } from '../landing-best-seller/landing-best-seller.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LandingBannerComponent,
    LandingBestSellerComponent,
    LandingFlashComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass',
})
export class LandingComponent {}
