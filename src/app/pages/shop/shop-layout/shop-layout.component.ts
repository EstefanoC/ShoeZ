import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Components
import { ShopGridComponent } from '../../../shared/components/shop/shop-grid/shop-grid.component';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { ShopFilterComponent } from '../../../shared/components/shop/shop-filter/shop-filter.component';

// Core
import { ShopFilter } from '../../../core/models/shop.interface';
import { defaultFilter } from '../../../core/defaultValues/shop';

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [ShopFilterComponent, ShopGridComponent, BreadcrumbsComponent],
  templateUrl: './shop-layout.component.html',
  styleUrl: './shop-layout.component.sass',
})
export class ShopLayoutComponent {
  filter: ShopFilter = defaultFilter;

  @Output() valueChange: EventEmitter<ShopFilter> =
    new EventEmitter<ShopFilter>();
  // @Input() filter: ShopFilter = defaultFilter;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check params to change filter (Only with the gender)
    this.route.queryParams.subscribe((routeParams) => {
      const key = Object.keys(routeParams);
      this.filter = defaultFilter;

      if (key.length !== 0) {
        this.filter = {
          ...this.filter,
          gender: this.filter.gender.filter((item) => item !== key[0]),
        };
      }
    });
  }

  changeFilter($event: ShopFilter) {
    this.filter = $event;
    console.log($event);
  }
}
