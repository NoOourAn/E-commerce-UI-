import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdereditemComponent } from './ordereditem.component';

describe('OrdereditemComponent', () => {
  let component: OrdereditemComponent;
  let fixture: ComponentFixture<OrdereditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdereditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdereditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
