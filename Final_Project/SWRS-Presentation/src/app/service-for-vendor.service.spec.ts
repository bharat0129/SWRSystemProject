import { TestBed } from '@angular/core/testing';

import { ServiceForVendorService } from './service-for-vendor.service';

describe('ServiceForVendorService', () => {
  let service: ServiceForVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
