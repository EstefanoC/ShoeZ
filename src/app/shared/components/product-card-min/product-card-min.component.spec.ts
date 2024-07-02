import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardMinComponent } from './product-card-min.component';

describe('ProductCardMinComponent', () => {
  let component: ProductCardMinComponent;
  let fixture: ComponentFixture<ProductCardMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardMinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
