import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Dependencies
import { MatSliderModule } from '@angular/material/slider';

// Core
import { Product } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-image360',
  standalone: true,
  imports: [MatSliderModule, FormsModule, CommonModule],
  templateUrl: './image360.component.html',
  styleUrl: './image360.component.sass',
})
export class Image360Component {
  @Input() imageData!: Product['images'];
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  context!: CanvasRenderingContext2D;
  value: number = 1;
  disabledSlider: boolean = true;
  images: Array<CanvasImageSource> = [];

  ngAfterViewInit() {
    // Loop to put in a canvas the images
    for (let i = 0; i < 37; i++) {
      if (i === 0) this.images[0] = new Image();

      const index: number = this.imageData.path.indexOf('.jpg');
      const currentlyValue: string = this.imageData.path.slice(
        index - 5,
        index
      );
      let number: string = i.toString().padStart(2, '00');
      const url = this.imageData.path.replace(currentlyValue, `img${number}`);

      let image = new Image();
      image.src = url;

      // Put the image after load
      image.addEventListener('load', () => {
        this.images[i] = image;

        this.images.length === 37 && this.animationSlider(); // Call initial animation

        this.handleSlider(image);
      });
    }
  }

  // Handle Canvas image
  handleSlider(image: CanvasImageSource) {
    this.context = this.canvas.nativeElement.getContext('2d')!;

    this.context.drawImage(
      image,
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
  }

  // Change canvas when change slide value
  ngAfterViewChecked() {
    if (this.images.length === 37) {
      this.handleSlider(this.images[this.value]);
    }
  }

  // Animation to Slider on initial load
  animationSlider() {
    let time: number[] = [];

    // First Animation in a Promise
    for (let i = 0; i < this.images.length; i++) {
      time.push(i * 50);

      setTimeout(() => {
        this.value = i;

        // Call the second Animation
        if (i === 35) {
          for (let n = i; n > 0; n--) {
            let times = [...time].reverse();

            setTimeout(() => {
              this.value = n;
              if (n === 1) this.disabledSlider = false;
            }, times[n]);
          }
        }
      }, time[i]);
    }
  }
}
