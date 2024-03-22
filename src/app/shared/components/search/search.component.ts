import { Component } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent {
  search = '';

  // Handle search Input
  onChangeSearch(event: Event) {
    // Get the new input value
    this.search = (event.target as HTMLInputElement).value;
  }
}
