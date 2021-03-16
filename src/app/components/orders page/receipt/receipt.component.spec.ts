import { ComponentFixture, TestBed } from '@angular/core/testing';

import { receiptComponent } from './receipt.component';

describe('OrderPageComponent', () => {
  let component: receiptComponent;
  let fixture: ComponentFixture<receiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ receiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(receiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
