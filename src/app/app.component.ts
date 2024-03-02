import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ShoeZ';
}
