import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceForVendorService } from '../service-for-vendor.service';
import { ServiceLayerService } from '../service-layer.service';
import { Customer } from '../customer';
import { Vendor } from '../vendor';
import { Hire } from '../hire';
import { Status } from '../status';
import { Mail } from '../mail'
import { Time } from '@angular/common';


@Component({
  selector: 'app-customer-profile-view2',
  templateUrl: './customer-profile-view2.component.html',
  styleUrls: ['./customer-profile-view2.component.css']
})
export class CustomerProfileView2Component implements OnInit {

  result: string;
  service: any;
  city: any;
  date: Date;
  time:Time;
  vendor: Vendor;
  hire: Hire;
  customer: Customer;
  mail: Mail;
  sessionmobile: number;

  constructor(private router: Router, private s: ServiceForVendorService, private y: ServiceLayerService) {
  }

  ngOnInit(): void {
    this.sessionmobile = parseInt(sessionStorage.getItem('mobileno'));
    console.log(this.sessionmobile);

    this.search();
    // Data Came From Customer Profile View 1 Component
    this.vendor = this.s.getOption();
    //console.log(this.vendor);

    this.service = this.vendor.fkskill;
    //console.log(this.service.servicename);

    this.city = this.vendor.fkcity;
    // console.log(this.city);
  }

  search() {
    this.y.customerFetch(this.sessionmobile).subscribe(
      (cust: Customer) => {
        if (cust.mobileno != 0) {
          this.customer = cust;
          //console.log(cust);
        }
      });
  }

  Hire() {
    this.hire = new Hire(this.vendor, this.customer, this.date,this.time);
    console.log(this.hire);
    console.log(this.time);
    this.y.hirevendor(this.hire).subscribe(
      (stsvendor: Status) => {
        if (stsvendor.status == 0) {
          this.result = "Hire Failed"
        }
        else {
          this.result = "Hire Successfully";
          this.mail = new Mail(this.vendor.email, this.customer.customername, this.vendor.firstname, this.hire.date);
          this.y.mailToVendor(this.mail).subscribe(
            (sts: Status) => {
              if (sts.status == 0)
              {
                this.result = "Mail Not Sent";
              }
              else 
              {
                this.result = "Mail sent";
                this.router.navigate(['app-customer-profile-view1']);
              }
            },
            (err) => { this.result = "Unable to connect the server" });
        }
      },
      (err) => { this.result = "Unable to connect the server" });
  }
}
