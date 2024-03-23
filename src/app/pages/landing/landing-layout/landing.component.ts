import { Component } from '@angular/core';

// Components
import { LandingBannerComponent } from '../landing-banner/landing-banner.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingBannerComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass',
})
export class LandingComponent {}
