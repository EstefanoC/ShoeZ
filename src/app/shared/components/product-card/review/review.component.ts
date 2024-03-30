import { Component, Input } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Ts
import { Review, ReviewStar } from '../../../../core/models/review.interface';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.sass',
})
export class ReviewComponent {
  @Input() review: Review = 0;
  stars: ReviewStar[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
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
