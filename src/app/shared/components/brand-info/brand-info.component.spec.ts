import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandInfoComponent } from './brand-info.component';

describe('BrandInfoComponent', () => {
  let component: BrandInfoComponent;
  let fixture: ComponentFixture<BrandInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
