import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// Dependencies
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIcon],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.sass',
})
export class BreadcrumbsComponent {
  routes!: string[];
  @Input() currentRoute!: string;

  constructor(private router: Router) {}
  ngOnInit() {
    this.routes = this.router.url
      .split('/')
      .map((e) => (e === '' ? 'home' : e));
  }

  setRouter(item: string): string {
    if (item === 'home') {
      return (item = '/');
    } else {
      return (item = '/' + item);
    }
  }
}
