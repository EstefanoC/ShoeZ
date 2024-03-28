import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFlashComponent } from './landing-flash.component';

describe('LandingFlashComponent', () => {
  let component: LandingFlashComponent;
  let fixture: ComponentFixture<LandingFlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFlashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
