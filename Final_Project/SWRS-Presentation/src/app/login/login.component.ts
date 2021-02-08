import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLayerService } from '../service-layer.service';
import { Login } from '../login';
import { AuthenticationService } from '../authentication.service';
import { MyObject } from '../my-object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  login: Login;
  result: any = "";

  constructor(private x: ActivatedRoute, private y: ServiceLayerService, private router: Router, private auth: AuthenticationService) {
    this.login = new Login('', '');
  }

  Login() {
    if (this.login.mobileno == 9960778322 && this.login.password == "admin") {
      this.auth.authenticate(this.login.mobileno, this.login.password)
            {
              this.router.navigate(['app-admin'])
              this.result = "Login Successfully";
            }     
    }
    else {
      //console.log(this.login);
      this.y.Login(this.login).subscribe(
        (obj: MyObject) => {
          console.log(obj)
          if (obj.cust.mobileno != null) 
          {
            this.auth.authenticate(obj.cust.customername, obj.cust.mobileno)
            {
              this.router.navigate(['app-customer-profile-view1'])
              this.result = "Login Successfully";
            }
          }
          else if (obj.ven.mobileno != null)
          {
            this.auth.authenticate(obj.ven.firstname, obj.ven.mobileno)
            {
              this.router.navigate(['app-vendor-profile-view1'])
              this.result = "Login Successfully";
            }
          }
          else{
            this.result = "Please enter Correct Mobile no and password";
          }
        },
        (err) => { this.result = "Unable to connect the server" });
    }
  }
}