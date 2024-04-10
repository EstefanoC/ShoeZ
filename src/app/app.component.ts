import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollUpComponent } from './shared/components/scroll-up/scroll-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ShoeZ';
}
