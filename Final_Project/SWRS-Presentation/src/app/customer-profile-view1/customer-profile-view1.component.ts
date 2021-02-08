import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city';
import { Skill } from '../skill';
import { State } from '../state';
import { Vendor } from '../vendor';
import { ServiceLayerService } from '../service-layer.service';
import { ServiceForVendorService } from '../service-for-vendor.service';

@Component({
  selector: 'app-customer-profile-view1',
  templateUrl: './customer-profile-view1.component.html',
  styleUrls: ['./customer-profile-view1.component.css']
})
export class CustomerProfileView1Component implements OnInit {
  [x: string]: object;

  result: any = "";
  servicename: any;
  cityname: any;
  statename: any;

  Sessionname:String;
  SessionMobileno:String;

  listofState: State[];
  listofCity: City[];
  listofSkill: Skill[];

  vendor: Vendor[];

  constructor(private y: ServiceLayerService,  private router: Router, private s:ServiceForVendorService) {

  }

  ngOnInit(): void {
   
    this.ListState();
    this.ListCity();
    this.ListSkill();
  }

  /* For DropDown List Of State */
  ListState() {
    this.y.getState().subscribe(
      data => {
        console.log('Categories' + JSON.stringify(data));
        this.listofState = data;
      });
  }

  /* For DropDown List Of City */
  ListCity() {
    this.y.getCity().subscribe(
      data => {
        console.log('Categories' + JSON.stringify(data));
        this.listofCity = data;
      });
  }

  /* For DropDown List Of Skill */
  ListSkill() {
    this.y.getSkill().subscribe(
      data => {
        console.log('Categories' + JSON.stringify(data));
        this.listofSkill = data;
      });
  }

  /* Show all Vendor From Selected State */
  selectChangeForState() {
    console.log(this.statename);

    this.y.SearchState(this.statename).subscribe(
      (object: Vendor[]) => {
        if (object.length == 0) {
          this.result = "such type of service is not present";
          this.vendor = object;
          console.log(this.vendor);
        }
        else {
          this.vendor = object;
          console.log(this.vendor);
          this.result = "Services available in below cities";
        }
      },
      (err) => { this.result = "failed" });
  }

   /* Show all Vendor From Selected State and City */
  selectChangeForCity() {
    console.log(this.statename);
    console.log(this.cityname);

    this.y.SearchStateCity(this.statename, this.cityname).subscribe(
      (object: Vendor[]) => {
        if (object.length == 0) {
          this.result = "such type of service is not present";
          this.vendor = object;
          console.log(this.vendor);
        }
        else {
          this.vendor = object;
          console.log(this.vendor);
          this.result = "Services available in below cities";
        }
      },
      (err) => { this.result = "failed" });
  }

   /* Show all Vendor From Selected State, City and Skill */
  selectChangeForSkill() {
    console.log(this.statename);
    console.log(this.cityname);
    console.log(this.servicename);
    this.y.SearchStateCitySkill(this.statename, this.cityname, this.servicename).subscribe(
      (object: Vendor[]) => {
        if (object.length == 0) {
          this.result = "such type of service is not present";
          this.vendor = object;
          console.log(this.vendor);
        }
        else {
          this.vendor = object;
          console.log(this.vendor);
          this.result = "Services available in below cities";
        }
      },
      (err) => { this.result = "failed" });
  }

  VendorData(mobileno:number)
  {
    tempven : new Vendor('','','',0,'','',0,'',this.state,this.city,this.skill,'',0);
    //console.log(mobileno);
     this.vendor.forEach(element => {
      if(element.mobileno === mobileno)
      {
        this.tempven = element;
        // console.log(this.tempven);
        this.s.setOption(this.tempven);
      }  
      this.router.navigate(['app-customer-profile-view2']);
     });
  }

}
