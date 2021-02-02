import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { ServiceLayerService } from '../service-layer.service';
import { MyObject } from '../my-object';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  @Input() cust:Customer

  result:string;

  constructor(private x: ActivatedRoute, private y: ServiceLayerService,  private router: Router) 
  { }
    
  ngOnInit(): void 
  {
    console.log(this.cust);
  }

  UpdateCustomerDetails()
  {
    this.y.updateCustomer(this.cust).subscribe(
      (cust: Customer) => {
        if (cust.mobileno == 0) {
          this.result = "Updaate Failed";
          this.cust = cust;
        }
        else 
        {
          this.result = "Update Done Succesfullly";
          this.router.navigate(['app-customer-profile-view1']);
        }
      },
      (err) => { this.result = "Unable to connect the server" }
    );
  }
}
