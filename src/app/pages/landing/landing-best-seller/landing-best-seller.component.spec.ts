import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBestSellerComponent } from './landing-best-seller.component';

describe('LandingBestSellerComponent', () => {
  let component: LandingBestSellerComponent;
  let fixture: ComponentFixture<LandingBestSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingBestSellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
