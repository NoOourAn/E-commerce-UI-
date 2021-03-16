import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgReviewComponent } from './bg-review.component';

describe('BgReviewComponent', () => {
  let component: BgReviewComponent;
  let fixture: ComponentFixture<BgReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
