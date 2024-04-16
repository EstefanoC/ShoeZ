import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image360Component } from './image360.component';

describe('Image360Component', () => {
  let component: Image360Component;
  let fixture: ComponentFixture<Image360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Image360Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Image360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
