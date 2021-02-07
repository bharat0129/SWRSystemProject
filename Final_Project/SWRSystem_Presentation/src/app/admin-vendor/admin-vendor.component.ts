import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { ServiceLayerService } from '../service-layer.service';
import { State } from '../state';
import { Vendor } from '../vendor';
import { NodeStatus } from '../node-status'

@Component({
  selector: 'app-admin-vendor',
  templateUrl: './admin-vendor.component.html',
  styleUrls: ['./admin-vendor.component.css']
})
export class AdminVendorComponent implements OnInit {

  result1: any = "";
  result2: any = "";
  result3: any = "";
  vendor: Vendor[];
  vend: Vendor;
  city: City;
  state: State;
  empty1 = [];
  empty2 = [];
  empty3 = [];
  nodeStatus: NodeStatus;

  constructor(private y: ServiceLayerService) {
    this.city = new City("", 0, 0);
    this.state = new State(0, "");
    this.vend = new Vendor("", "", "", 0, "", "", 0, "", this.vend, this.vend, this.vend, "",0);
  }

  ngOnInit(): void {
  }


  //------------------------------------------- Get Vendors From City- -----------------------------------------------------

  getVendorsByCity() {
    console.log(this.city.cityname);
    this.y.selectVendorsByCity(this.city.cityname).
      subscribe(
        (object: NodeStatus[]) => {

          if (object.length === 0) {
            this.result1 = "Details Not Found";
            this.empty1 = object;
            console.log(this.empty1);

          }
          else {
            this.empty1 = object;
            this.result1 = "Details Found ";
            console.log(this.empty1);
          }
        },
        (err) => { this.result1 = "failed" });
  }

  //------------------------------------------ Get Vendors From State -------------------------------------------------------

  getVendorsByState() {
    this.y.selectVendorsByState(this.state.statename).
      subscribe(
        (object: NodeStatus[]) => {

          if (object.length === 0) {
            this.result2 = "Details Not Found";
            this.empty2 = object;

          }
          else {
            this.empty2 = object;
            this.result2 = "Details Found ";
          }
        },
        (err) => { this.result2 = "failed" });
  }

  //------------------------------------------ Delete Vendor -------------------------------------------------------

  DeleteVendor() {
    this.y.deleteVendor(this.vend.mobileno).
      subscribe(
        (object: NodeStatus[]) => {

          if (object.length === 0) {
            this.result3 = "Delete Successfully";
          }
          else {
            this.result3 = "Delete Failed ";
          }
        },
        (err) => { this.result3 = "failed" });
  }

   //------------------------------------------- Get All Vendors------------------------------------------------------

   getAllVendors() {
    this.y.selectVendor(this.nodeStatus).
      subscribe(
        (object: NodeStatus[]) => {

          if (object.length === 0) {
            this.result3 = "Details Not Found";
            this.empty3 = object;
            
          }
          else {
            this.empty3 = object;
            this.result3 = "Details Found ";
            console.log(object);
          }
        },
        (err) => { this.result3 = "failed" });
  }

}
