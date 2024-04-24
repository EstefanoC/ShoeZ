export type Review = number;

export interface ReviewStar {
  value: number;
}

export interface ReviewLong {
  star: number;
  value: number;
  progress: number;
}

export interface sortReview {
  label: string;
  value: string;
}

export interface comments {
  user: string;
  date: Date;
  review: Review;
  comment: string;
  title: string;
}
