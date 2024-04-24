import { Component, Input, ViewEncapsulation } from '@angular/core';

// Component
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LongReviewComponent } from '../long-review/long-review.component';
import { ReviewComponent } from '../../product-card/review/review.component';
// Core
import { Product } from '../../../../core/models/product.interface';
import { comments, sortReview } from '../../../../core/models/review.interface';

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [
    MatButton,
    FormsModule,
    MatInputModule,
    ReviewComponent,
    MatSelectModule,
    MatDividerModule,
    MatFormFieldModule,
    LongReviewComponent,
  ],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class ProductReviewComponent {
  @Input() data!: Product;
  sort: sortReview[] = [
    {
      label: 'Most Recent',
      value: 'tes',
    },
    {
      label: 'Lowest Rating',
      value: 'tes',
    },
    {
      label: 'Highest Rating',
      value: 'tes',
    },
  ];
  comments: comments[] = [
    {
      user: 'Good Man',
      date: new Date(),
      review: 5,
      comment:
        'Good shoe trainers before the delivery date and in very excellent condition',
      title: 'I love trainers',
    },
    {
      user: 'Nike Lovers',
      date: new Date(),
      review: 4.5,
      comment:
        'Zappos has an incredible variety of shoes! From sneakers to stilettos, they’ve got it all',
      title: 'The Ultimate Shoe Paradise',
    },
    {
      user: 'ShoeAddict101',
      date: new Date(),
      review: 3.5,
      comment: 'Perfect for street style.',
      title: 'Where Style Meets Edge',
    },
    {
      user: 'BudgetFashionistadsssssssssssssssssssssssssssssss',
      date: new Date(),
      review: 3,
      comment: 'Casual to formal, they’ve got options.',
      title: 'Where Style Meets Edge',
    },
    {
      user: 'Bigger',
      date: new Date(),
      review: 5,
      comment: 'Snagged a pair of high-end heels at a fraction of the cost.',
      title: 'Discount Heaven',
    },
  ];
}
