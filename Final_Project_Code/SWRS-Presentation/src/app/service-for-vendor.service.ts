import { Injectable } from '@angular/core';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class ServiceForVendorService {

  constructor() { }

  private vendor:Vendor;

  setOption(vendor) {      
    this.vendor = vendor;  
  }  
  
  getOption() {  
    return this.vendor;  
  }  

}
