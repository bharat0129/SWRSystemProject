import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileView1Component } from './customer-profile-view1.component';

describe('CustomerProfileView1Component', () => {
  let component: CustomerProfileView1Component;
  let fixture: ComponentFixture<CustomerProfileView1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileView1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
