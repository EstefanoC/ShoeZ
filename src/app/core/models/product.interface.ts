export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  tag: string[];
  color: string;
  releaseDate: Date;
  condition: string;
  images: {
    path: string;
    number: number;
  };
}
