import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBriefComponent } from './slider-brief.component';

describe('SliderBriefComponent', () => {
  let component: SliderBriefComponent;
  let fixture: ComponentFixture<SliderBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
