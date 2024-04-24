import { Component, Input } from '@angular/core';

// Component
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Core
import { Product } from '../../../../core/models/product.interface';
import { ReviewLong } from '../../../../core/models/review.interface';

@Component({
  selector: 'app-long-review',
  standalone: true,
  imports: [MatButtonModule, MatProgressBarModule, MatIcon],
  templateUrl: './long-review.component.html',
  styleUrl: './long-review.component.sass',
})
export class LongReviewComponent {
  @Input() data!: Product;
  reviewList: ReviewLong[] = [
    {
      star: 1,
      value: 1,
      progress: 10,
    },
    {
      star: 2,
      value: 0,
      progress: 0,
    },
    {
      star: 3,
      value: 6,
      progress: 25,
    },
    {
      star: 4,
      value: 1,
      progress: 10,
    },
    {
      star: 5,
      value: 15,
      progress: 80,
    },
  ];

  // Function to calculate if star is empty, half of full (0 - 5)
  calculateReview(
    rating: number,
    star: number
  ): 'star' | 'star_rate' | 'star_half' {
    // Always return zero if true
    if (rating === 0) {
      return 'star_rate';
    }

    // Put full star if rating is more than star
    if (rating >= star) {
      return 'star';
    }

    // Put half star if rating is .5 and same to star
    if (!Number.isInteger(rating) && Math.round(rating) === star) {
      return 'star_half';
    }

    // Put empty star for default
    return 'star_rate';
  }
}
