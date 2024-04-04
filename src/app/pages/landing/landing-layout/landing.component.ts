import { Component } from '@angular/core';

// Components
import { LandingFlashComponent } from '../landing-flash/landing-flash.component';
import { LandingBannerComponent } from '../landing-banner/landing-banner.component';
import { LandingTrendingComponent } from '../landing-trending/landing-trending.component';
import { InstagramComponent } from '../../../shared/components/instagram/instagram.component';
import { LandingCategoriesComponent } from '../landing-categories/landing-categories.component';
import { LandingBestSellerComponent } from '../landing-best-seller/landing-best-seller.component';
import { CustomerComponent } from '../../../shared/components/customer/customer-layout/customer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CustomerComponent,
    InstagramComponent,
    LandingFlashComponent,
    LandingBannerComponent,
    LandingTrendingComponent,
    LandingBestSellerComponent,
    LandingCategoriesComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass',
})
export class LandingComponent {}
