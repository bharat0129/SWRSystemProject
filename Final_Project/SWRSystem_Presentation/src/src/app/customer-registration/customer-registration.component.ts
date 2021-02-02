import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { ServiceLayerService } from '../service-layer.service';
import { Status } from '../status';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {

  result: any = "";
  customer: Customer;

  res:String;

  constructor(private x: ActivatedRoute, private y: ServiceLayerService,  private router: Router) {
    this.customer = new Customer('', '', '', '', '', '', '');

  }

  customerRegistration() {
    this.y.customerInsert(this.customer).subscribe(
      (status: Status) => {
        if (status.status == 0) {
          this.result = "User Alredy Exist"
        }
        else {
          this.result = "Registered Successfully"
          this.router.navigate(['app-customer-profile-view1']);
        }
      },

      (err) => { this.result = "Unable to connect the server" }
    );
  }
}
