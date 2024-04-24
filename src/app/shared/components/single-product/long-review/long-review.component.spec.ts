import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongReviewComponent } from './long-review.component';

describe('LongReviewComponent', () => {
  let component: LongReviewComponent;
  let fixture: ComponentFixture<LongReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LongReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
