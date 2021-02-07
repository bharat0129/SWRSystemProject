import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { ServiceLayerService } from '../service-layer.service';
import { Status } from '../status';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  email:String;
  result:String;

  constructor(private y:ServiceLayerService, private router:Router) 
  { 

  }

  ngOnInit(): void {

  }

  Submit()
  {

    this.y.forgotpassword(this.email).subscribe(
      (status: Status) => {
        if (status.status == 0) {
          this.result = "No Email Id Found";
        }
        else {
          this.result = "Mail Sent Succesfully, Please Kindly Check your Mail";
        }
      },
      (err) => { this.result = "Unable to connect the server" }
    );
  }
}

