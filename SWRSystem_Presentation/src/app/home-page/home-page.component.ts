import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { Skill } from '../skill';
import { ServiceLayerService } from '../service-layer.service';
 
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  result:any = "";
  skillobj:Skill;
  city:City[];

  constructor(private y:ServiceLayerService) {
    this.skillobj =new Skill("",0);
   }

   search()
  {
    this.y.multiselect(this.skillobj.servicename).
    subscribe(
      (object:City[])=>{

        if(object.length == 0){
          this.result="such type of service is not present";
          this.city = object;
        }
        else
        {           
            this.city=object;
            this.result="Services available in below cities";
        }
      },   
    (err)=>{ this.result="failed"});
  }

}

