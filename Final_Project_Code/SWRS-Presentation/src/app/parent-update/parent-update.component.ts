import { Component, OnInit } from '@angular/core';
import { ServiceLayerService } from '../service-layer.service';
import { MyObject } from '../my-object';
import { Customer } from '../customer';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-parent-update',
  templateUrl: './parent-update.component.html',
  styleUrls: ['./parent-update.component.css']
})

export class ParentUpdateComponent implements OnInit 
{
  sessionmobileno:number
  result:String
  cust:Customer
  ven:Vendor

  constructor(private y:ServiceLayerService) 
  {
   
  }

  ngOnInit(): void 
  {
    this.sessionmobileno = parseInt(sessionStorage.getItem('mobileno'));
    console.log(this.sessionmobileno);
    this.fetchDetailsBasedOnNumber();
    this.checkuser();
  }

  checkuser()
  {
    if(this.cust!= null){
      return true
    }
  }

  fetchDetailsBasedOnNumber(){
    this.y.getchdeatails(this.sessionmobileno).subscribe(
      (obj:MyObject)=>{
        if( obj != null )
        {
          if(obj.cust != null)
          {
            this.cust = obj.cust;
            //console.log(this.cust);
          }
          else
          {
            this.ven= obj.ven;
            //console.log(this.ven);
          }
        }
        else
        {
          this.result = "error in request";
        }
      },
      (err)=>{ this.result = "Unable to connect the server" }
    );    
  }
}
