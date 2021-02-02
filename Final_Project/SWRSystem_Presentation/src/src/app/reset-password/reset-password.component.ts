import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLayerService} from '../service-layer.service';
import { Status } from '../status';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password:String;
  result:String;
  token:String

  constructor(private y:ServiceLayerService, private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe(params => {
          this.token = params['token'];
          //console.log(this.token); 
      });
  }

  ngOnInit(): void {
  }

  Submit(){

    this.y.resetpasswordlink(this.password, this.token).subscribe(
      (status: Status) => {
        if (status.status == 0) {
          this.result = "password update Failed";
        }
        else {
          this.result = "Password update Done";
          this.router.navigate(['app-login']);
        }
      },
      (err) => { this.result = "Unable to connect the server" }
    );
  }
}

