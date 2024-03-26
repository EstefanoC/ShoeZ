import { Component } from '@angular/core';

// Components
import { LandingBannerComponent } from '../landing-banner/landing-banner.component';
import { LandingBestSellerComponent } from '../landing-best-seller/landing-best-seller.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingBannerComponent, LandingBestSellerComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass',
})
export class LandingComponent {}
