import { Component } from '@angular/core';

// Components
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

// Core
import { BrandInfo } from '../../../core/models/brand.interface';

@Component({
  selector: 'app-brand-info',
  standalone: true,
  imports: [MatGridListModule, MatIconModule],
  templateUrl: './brand-info.component.html',
  styleUrl: './brand-info.component.sass',
})
export class BrandInfoComponent {
  breakpoint = false;

  data: BrandInfo[] = [
    {
      icon: 'sync_alt',
      title: '30 DAYS RETURN',
      content: 'Simply return it within 30 days for an exchange.',
    },
    {
      icon: 'local_shipping',
      title: 'FREE US DELIVERY',
      content: 'On orders over $200!',
    },
    {
      icon: 'support_agent',
      title: 'SUPPORT 24/7',
      content: 'Contact us 24 hours a day, 7 days a week',
    },
  ];

  // Check the breakpoints
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 540;
  }

  // Resize window
  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 540;
  }
}
