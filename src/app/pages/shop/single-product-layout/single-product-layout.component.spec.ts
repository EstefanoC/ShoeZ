import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductLayoutComponent } from './single-product-layout.component';

describe('SingleProductLayoutComponent', () => {
  let component: SingleProductLayoutComponent;
  let fixture: ComponentFixture<SingleProductLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProductLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
