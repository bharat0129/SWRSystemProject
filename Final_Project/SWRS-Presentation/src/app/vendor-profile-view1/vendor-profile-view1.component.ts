import { ParsedEvent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Hire } from '../hire';
import { ServiceLayerService } from '../service-layer.service';
import { Status } from '../status';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-profile-view1',
  templateUrl: './vendor-profile-view1.component.html',
  styleUrls: ['./vendor-profile-view1.component.css']
})
export class VendorProfileView1Component implements OnInit {

  result:String;
  sessionmobile:number;

  customer:Customer;
  vendor:Vendor;
  hire:Hire[];
  state: object;
  city: object;
  skill: object;

  constructor(private y:ServiceLayerService) 
  { 
    this.vendor = new Vendor('','','',0,'','',0,'',this.state,this.city,this.skill,'',0);
  }

  ngOnInit()
  {
    this.sessionmobile = parseInt(sessionStorage.getItem('mobileno'));
     this.GetVendorDetails(); 
     this.GetVendorHireDetails();
   
  }

   GetVendorDetails()
  {
     this.y.GetDetails(this.sessionmobile).subscribe(
      (ven: Vendor) => {
        if (ven === null) {
          this.result = "Vendor Details Not Found";
        }
        else 
        {
          this.result = "Vendor Details  Found";
          this.vendor = ven;
          console.log(this.vendor);
        }
      },
      (err) => { this.result = "failed" });
  }

   GetVendorHireDetails()
  {
    this.y.GetHireDetails(this.vendor).subscribe(
      (object: Hire[]) => {
        if (object != null) {
          this.result = "Vendor Details Found";
          this.hire = object;
          console.log(this.result);
          console.log(this.hire);
        
        }
        else {
          this.result = "Vendor Details Not Found";
          console.log(this.result);
        }
      },
      (err) => { this.result = "failed" });
  }

  Accept(customerId:number)
  {
    console.log(customerId);
    this.y.AcceptRequest(customerId).subscribe(
      (object: Status) => {
        if (object != null) {
          this.result = "Update Done";
          console.log(this.result);    
        }
        else {
          this.result = "Update Failed";
          console.log(this.result);
        }
      },
      (err) => { this.result = "failed" });
  }

  Reject(customerId:number)
  {
    console.log(customerId);
    this.y.RejectRequest(customerId).subscribe(
      (object: Status) => {
        if (object != null) {
          this.result = "Update Done";
          console.log(this.result);    
        }
        else {
          this.result = "Update Failed";
          console.log(this.result);
        }
      },
      (err) => { this.result = "failed" });
  }
}
