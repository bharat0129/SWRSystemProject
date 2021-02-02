import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfileView1Component } from './vendor-profile-view1.component';

describe('VendorProfileView1Component', () => {
  let component: VendorProfileView1Component;
  let fixture: ComponentFixture<VendorProfileView1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProfileView1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProfileView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
