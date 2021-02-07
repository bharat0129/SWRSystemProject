import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileView2Component } from './customer-profile-view2.component';

describe('CustomerProfileView2Component', () => {
  let component: CustomerProfileView2Component;
  let fixture: ComponentFixture<CustomerProfileView2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileView2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
