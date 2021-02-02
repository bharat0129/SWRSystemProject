import { Time } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';
import { ServiceLayerService } from '../service-layer.service';
import { Skill } from '../skill';
import { State } from '../state';
import { Status } from '../status';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {

  @Input() ven:Vendor

  imageSrc: string;
  file: File;
  result:any = "";

  state:State;
  listofState:State[];
  city:City;
  listofCity:City[];
  skill:Skill;
  listofSkill:Skill[];
 
  constructor(private x:ActivatedRoute,private y:ServiceLayerService, private router: Router)
  { }

  ngOnInit(): void
  {
     this.ListState();
     this.ListCity();
     this.ListSkill();
  }

   /* For DropDown List Of State */
  ListState()
  {
    this.y.getState().subscribe(
      data => {
        this.listofState = data;
      }
    );
  }

   /* For DropDown List Of City */
  ListCity()
  {
    this.y.getCity().subscribe(
      data => {
        this.listofCity = data;
      }
    );
  }

   /* For DropDown List Of Skill */
  ListSkill()
  {
    this.y.getSkill().subscribe(
      data => {
        this.listofSkill = data;
      }
    );
  }

  selectChangeForState(){
    let state = {};
    this.listofState.forEach(element => {
      if(element["statename"] == this.ven.fkstate){
        state["id"]=element["id"];
      }
    });
    this.ven.fkstate=state;
  }

  selectChangeForCity(){
    
    let city = {};
    this.listofCity.forEach(element => {
      if(element["cityname"] == this.ven.fkcity){
        city["cityid"]=element["cityid"];
      }
    });
    this.ven.fkcity=city;
  }

  selectChangeForSkill(){
   
    let skill = {};
    this.listofSkill.forEach(element => {
      if(element['servicename'] == this.ven.fkskill){
        skill["serviceid"]=element["serviceid"];
      }
    });
    this.ven.fkskill=skill;

  }

  vendorUpdate()
  {
    this.y.vendorupdate(this.ven).subscribe(
      (ven:Vendor)=>
      {
        if(ven != null)
        {
          this.result = "Update Successfully";
          this.router.navigate(['app-vendor-profile-view1']);
        }
        else
        {
          this.result="Update Failed";
        }
      },
      (err)=>{this.result="Unable to connect the server"}
      );
    }
}
