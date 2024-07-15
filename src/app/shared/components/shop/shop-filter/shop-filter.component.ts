import { FormsModule } from '@angular/forms';
import {
  model,
  signal,
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

// Dependencies
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

// Core
import { ShopFilter } from '../../../../core/models/shop.interface';
import { defaultFilter } from '../../../../core/defaultValues/shop';
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
export class ShopFilterComponent implements OnChanges {
  readonly panelOpenState = signal(false);
  readonly checked = model(false);

  @Output() filterChange: EventEmitter<ShopFilter> =
    new EventEmitter<ShopFilter>();
  @Input() filter: ShopFilter = defaultFilter;

  // Check when filter changes for queries
  ngOnChanges(changes: SimpleChanges) {
    this.gender = this.gender.map((v) => {
      if (this.filter.gender.findIndex((i) => i === v.name) !== -1) {
        v.active = true;
      } else {
        v.active = false;
      }

      return v;
    });
  }

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
    if (
      Number($event.target.getAttribute('ng-reflect-value')) === ProductMinPrice
    ) {
      this.filterChange.emit({
        ...this.filter,
        price: [Number($event.target.value), this.filter.price[1]],
      });
    } else {
      this.filterChange.emit({
        ...this.filter,
        price: [this.filter.price[0], Number($event.target.value)],
      });
    }
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
      // Tag Conditional to update
      if (type === 'tag') {
        this.tag[index].active = $event.checked;

        if ($event.checked) {
          this.filterChange.emit({
            ...this.filter,
            tag: [...this.filter.tag, target.name as TagInterface['name']],
          });
        } else {
          this.filterChange.emit({
            ...this.filter,
            tag: [...this.filter.tag.filter((v) => v !== target.name)],
          });
        }

        // Color Conditional to update
      } else if (type === 'color') {
        this.color[index].active = $event.checked;

        if ($event.checked) {
          this.filterChange.emit({
            ...this.filter,
            color: [
              ...this.filter.color,
              target.name as ColorInterface['name'],
            ],
          });
        } else {
          this.filterChange.emit({
            ...this.filter,
            color: [...this.filter.color.filter((v) => v !== target.name)],
          });
        }

        // Gender Conditional to update
      } else if (type === 'gender') {
        this.gender[index].active = $event.checked;

        if ($event.checked) {
          this.filterChange.emit({
            ...this.filter,
            gender: [
              ...this.filter.gender,
              target.name as GenderInterface['name'],
            ],
          });
        } else {
          this.filterChange.emit({
            ...this.filter,
            gender: [...this.filter.gender.filter((v) => v !== target.name)],
          });
        }
        // Condition Conditional to update
      } else if (type === 'condition') {
        this.condition[index].active = $event.checked;

        if ($event.checked) {
          this.filterChange.emit({
            ...this.filter,
            condition: [
              ...this.filter.condition,
              target.name as ConditionInterface['name'],
            ],
          });
        } else {
          this.filterChange.emit({
            ...this.filter,
            condition: [
              ...this.filter.condition.filter((v) => v !== target.name),
            ],
          });
        }

        // Size Conditional to update
      } else {
        this.size[index].active = $event.checked;

        if ($event.checked) {
          this.filterChange.emit({
            ...this.filter,
            size: [...this.filter.size, target.name as SizeInterface['name']],
          });
        } else {
          this.filterChange.emit({
            ...this.filter,
            size: [...this.filter.size.filter((v) => v !== target.name)],
          });
        }
      }
    }
  }
}
