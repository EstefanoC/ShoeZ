import { Component } from '@angular/core';

// Core
import { particleCustomer } from '../../../core/defaultValues/particles';

declare let particlesJS: any;

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.sass',
})
export class CustomerComponent {
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', particleCustomer, function () {});
  }
}
