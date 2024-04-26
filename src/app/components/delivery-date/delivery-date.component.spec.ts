import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDateComponent } from './delivery-date.component';

describe('DeliveryDateComponent', () => {
  let component: DeliveryDateComponent;
  let fixture: ComponentFixture<DeliveryDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryDateComponent]
    });
    fixture = TestBed.createComponent(DeliveryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
