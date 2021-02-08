import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { Skill } from '../skill';
import { ServiceLayerService } from '../service-layer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  result: any = "";
  skillobj: Skill;
  city: City[];

  constructor(private y: ServiceLayerService, private router: Router) {
    this.skillobj = new Skill("", 0);
  }

  search() {
    if (this.skillobj.servicename == "")
      this.result = "Please Enter Service Name";
    else {
      this.y.multiselect(this.skillobj.servicename).
        subscribe(
          (object: City[]) => {

            if (object.length == 0) {
              this.result = "Service is not available";
              this.city = object;
            }
            else {
              this.city = object;
              console.log(this.city);
              this.result = "Services available in below cities";
            }
          },
          (err) => { this.result = "failed" });
    }
  }

  click() {
    this.router.navigate(['app-login']);
  }
}

