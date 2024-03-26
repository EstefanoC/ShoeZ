import { Component, ViewChild } from '@angular/core';

// Dependencies
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
// Components
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-landing-banner',
  standalone: true,
  imports: [BannerComponent, MatButtonModule, MatGridListModule],
  templateUrl: './landing-banner.component.html',
  styleUrl: './landing-banner.component.sass',
})
export class LandingBannerComponent {
  title = '';
  @ViewChild(BannerComponent, { static: true }) banner!: any;

  title2 = this.banner?.slidePos;

  ngAfterViewInit(): void {
    this.title = this.banner.slidePos;
  }
}
