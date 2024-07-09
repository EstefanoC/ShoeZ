import {
  model,
  signal,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

// Dependencies
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

// Core
import { TagInterface } from '../../../../core/models/tag.interface';
import { ColorInterface } from '../../../../core/models/color.interface';
import {
  ConditionInterface,
  GenderInterface,
  SizeInterface,
} from '../../../../core/models/product.interface';
import {
  ProductSize,
  ProductTags,
  ProductColor,
  ProductGender,
  ProductMaxPrice,
  ProductMinPrice,
  ProductCondition,
} from '../../../../core/defaultValues/product';

@Component({
  selector: 'app-shop-filter',
  standalone: true,
  imports: [
    FormsModule,
    MatSliderModule,
    MatDividerModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],
  templateUrl: './shop-filter.component.html',
  styleUrl: './shop-filter.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopFilterComponent {
  readonly panelOpenState = signal(false);
  readonly checked = model(false);

  // Price
  maxPrice = ProductMaxPrice;
  minPrice = ProductMinPrice;

  // Checkbox
  tag = ProductTags;
  color = ProductColor;
  gender = ProductGender;
  condition = ProductCondition;
  size = ProductSize;

  // Handle Slider
  handleSlider($event: any) {
    console.log($event, 'change price');
  }

  //  Handle Checkbox
  valueChange(
    allTag:
      | TagInterface[]
      | ColorInterface[]
      | GenderInterface[]
      | ConditionInterface[]
      | SizeInterface[],
    target:
      | TagInterface
      | SizeInterface
      | ColorInterface
      | GenderInterface
      | ConditionInterface,
    type: 'tag' | 'color' | 'gender' | 'condition' | 'size',
    $event: any
  ) {
    const index = allTag.findIndex(({ id }) => target.id === id);

    if (index !== -1) {
      if (type === 'tag') {
        this.tag[index].active = $event.checked;
      } else if (type === 'color') {
        this.color[index].active = $event.checked;
      } else if (type === 'gender') {
        this.gender[index].active = $event.checked;
      } else if (type === 'condition') {
        this.condition[index].active = $event.checked;
      } else {
        this.size[index].active = $event.checked;
      }
    }
  }
}
