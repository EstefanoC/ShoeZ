import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Dependencies
import { MatSliderModule } from '@angular/material/slider';

// Core
import { Product } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-image360',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './image360.component.html',
  styleUrl: './image360.component.sass',
})
export class Image360Component {
  @Input() imageData!: Product['images'];
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  context!: CanvasRenderingContext2D;
  value: number = 1;
  images: Array<any> = [];

  getImage(path: string): string {
    const index: number = path.indexOf('.jpg');
    const currentlyValue: string = path.slice(index - 5, index);
    let number: string = this.value.toString().padStart(2, '00');

    return path.replace(currentlyValue, `img${number}`);
  }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d')!;
    let image = new Image();
    image.src = this.imageData.path;
  }

  ngAfterViewInit() {
    // Loop to put in a canvas the images
    for (let i = 0; i < 36; i++) {
      const index: number = this.imageData.path.indexOf('.jpg');
      const currentlyValue: string = this.imageData.path.slice(
        index - 5,
        index
      );
      let number: string = i.toString().padStart(2, '00');
      const url = this.imageData.path.replace(currentlyValue, `img${number}`);

      this.context = this.canvas.nativeElement.getContext('2d')!;
      let image = new Image();
      image.src = url;

      // Put the image after load
      image.addEventListener('load', () => {
        this.context.drawImage(
          image,
          0,
          0,
          this.canvas.nativeElement.width,
          this.canvas.nativeElement.height
        );
      });
    }
  }
}
