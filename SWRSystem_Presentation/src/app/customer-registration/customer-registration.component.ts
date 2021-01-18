import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { ServiceLayerService } from '../service-layer.service';
import { Status } from '../status';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent{

  result:any = "";
  customer:Customer;
  
  constructor(private x:ActivatedRoute,private y:ServiceLayerService) {
    this.customer = new Customer('','','','','','','');
   }

  customerRegistration()
  {
   this.y.customerInsert(this.customer).subscribe(
    (status:Status)=>
    {
      if(status.status==0)
      {
        alert( this.result="User Alredy Exist")
      } 
      else
      {
        alert(this.result="Registered Successfully")
      } 
    },
    
    (err)=>{this.result="Unable to connect the server"}
     
   );
}
  

}
