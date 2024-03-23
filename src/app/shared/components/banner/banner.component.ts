import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

// Dependencies
import Atropos from 'atropos';
import 'atropos/css/min';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.sass',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // const atropos = Atropos({
    //   el: '.my-atropos',
    //   activeOffset: 40,
    //   alwaysActive: true,
    //   highlight: true,
    //   shadowScale: 1.05,
    //   rotateXMax: 1,
    //   rotateYMax: 1,
    //   // onEnter() {
    //   //   console.log('Enter');
    //   // },
    //   // onLeave() {
    //   //   console.log('Leave');
    //   // },
    //   // onRotate(x, y) {
    //   //   console.log('Rotate', x, y);
    //   // },
    // });
  }
}
