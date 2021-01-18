import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLayerService } from '../service-layer.service';
import { City } from '../city';
import { Skill } from '../skill';
import { State } from '../state';
import { Status } from '../status';
import { Vendor } from '../vendor';
import { from } from 'rxjs';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit  {

  imageSrc: string;
  file: File;
  result:any = "";

  vendor:Vendor;
  state:State;
  listofState:State[];
  city:City;
  listofCity:City[];
  skill:Skill;
  listofSkill:Skill[];
 
  constructor(private x:ActivatedRoute,private y:ServiceLayerService)
  {
    this.vendor = new Vendor('','','',0,'','',0,'',this.state,this.city,this.skill,'');
   }

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
        console.log('Categories' + JSON.stringify(data));
        this.listofState = data;
      }
    );
  }

   /* For DropDown List Of City */
  ListCity()
  {
    this.y.getCity().subscribe(
      data => {
        console.log('Categories' + JSON.stringify(data));
        this.listofCity = data;
      }
    );
  }

   /* For DropDown List Of Skill */
  ListSkill()
  {
    this.y.getSkill().subscribe(
      data => {
        console.log('Categories' + JSON.stringify(data));
        this.listofSkill = data;
      }
    );
  }

  selectChangeForState(){
    console.log(this.vendor.fkstate);
    let state = {};
    this.listofState.forEach(element => {

      if(element["statename"] == this.vendor.fkstate){
        state["id"]=element["id"];
      }
      console.log(element);
    });
    this.vendor.fkstate=state;
    console.log(this.vendor.fkstate);
  }

  selectChangeForCity(){
    console.log(this.vendor.fkcity);
    let city = {};
    this.listofCity.forEach(element => {
      if(element["cityname"] == this.vendor.fkcity){
        city["cityid"]=element["cityid"];
      }
      console.log(element);
    });
    this.vendor.fkcity=city;
    console.log(this.vendor.fkcity);
  }

  selectChangeForSkill(){
    console.log(this.vendor.fkskill);
    let skill = {};
    this.listofSkill.forEach(element => {
      if(element['servicename'] == this.vendor.fkskill){
        skill["serviceid"]=element["serviceid"];
      }
      console.log(element);
    });
    this.vendor.fkskill=skill;
    console.log(this.vendor.fkskill);
  }

  vendorRegistration()
  {
    this.y.vendorInsert(this.vendor, this.file).subscribe(
      (stsvendor:Status)=>
      {
        if(stsvendor.status==0)
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

    /* Function For File Upload */
    onFileChange(event)
    {
      const reader = new FileReader();

      if(event.target.files && event.target.files.length) {

        const[file] = event.target.files;

        this.file = file;
        reader.readAsDataURL(file);
        console.log(this.file);
        reader.onload = () => {
          this.imageSrc = reader.result as string;
        };
      }
    }
}
