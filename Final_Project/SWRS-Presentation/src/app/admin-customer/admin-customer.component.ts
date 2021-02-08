import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { Customer } from '../customer';
import { NodeStatus } from '../node-status';
import { ServiceLayerService } from '../service-layer.service';
import { State } from '../state';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit 
{
  result1: any = "";
  result2: any = "";
  result3: any = "";
  result4: any = "";
  cust: Customer;
  city: City;
  state: State;
  empty1 = [];
  empty2 = [];
  empty3 = [];
  nodeStatus: NodeStatus;


  constructor(private y: ServiceLayerService) {
    this.city = new City("", 0, 0);
    this.state = new State(0, "");
    this.cust = new Customer("", "", "", "", "", "", "");
  }

  ngOnInit(): void {
  }


  //------------------------------------------- Customers By City -----------------------------------------------------

  getCustomerByCity() {
    this.y.selectCustomerByCity(this.city.cityname).
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

  //------------------------------------------- Customers By State -----------------------------------------------------

  getCustomerByState() {
    this.y.selectCustomerByState(this.state.statename).
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

  //------------------------------------------- Get All Customers- -----------------------------------------------------

  getAllCustomers() {
    this.y.selectCustomer(this.nodeStatus).
      subscribe(
        (object: NodeStatus[]) => {

          if (object.length === 0) {
            this.result3 = "Details Not Found";
            this.empty3 = object;
          }
          else {
            this.empty3 = object;
            this.result3 = "Details Found ";
          }
        },
        (err) => { this.result3 = "failed" });
  }

  //------------------------------------------ Delete Customer -------------------------------------------------------

  DeleteCustomer() {
    this.y.deleteCustomer(this.cust.mobileno).
      subscribe(
        (object: NodeStatus[]) => {

          if (object.length === 0) {
            this.result4 = "Delete Successfully";
          }
          else {
            this.result4 = "Delete Failed ";
          }
        },
        (err) => { this.result4 = "failed" });
  }
}
