import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarouselComponent } from './customer-carousel.component';

describe('CustomerCarouselComponent', () => {
  let component: CustomerCarouselComponent;
  let fixture: ComponentFixture<CustomerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
