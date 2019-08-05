import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderContactDataComponent } from './order-contact-data.component';

describe('OrderContactDataComponent', () => {
  let component: OrderContactDataComponent;
  let fixture: ComponentFixture<OrderContactDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderContactDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderContactDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
