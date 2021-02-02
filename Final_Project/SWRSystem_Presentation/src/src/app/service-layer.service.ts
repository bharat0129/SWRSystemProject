import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { City } from './city';
import { Customer } from './customer';
import { Status } from './status';
import { Vendor } from './vendor';
import { State } from './state';
import { Skill } from './skill';
import { Login } from './login';
import { Hire } from './hire';
import { Mail } from './mail';
import { MyObject } from './my-object';
import { NodeStatus } from './node-status';


@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {

  constructor(private x: HttpClient) { 
  }

  /* Home Page */
  multiselect(y: any):Observable<City[]>
  {
    let url = 'http://localhost:8080/service?x=' + y;
    return this.x.get<City[]>(url);
  }

  /* Customer Registration Page*/
  customerInsert(obj:Customer):Observable<Status>
  {
    let url = 'http://localhost:8080/customerRegistration';
    return this.x.post<Status>(url, obj);
  }

  /* Dropdown list for State */
  getState():Observable<State[]> {
    let url = 'http://localhost:8080/listOfState';
    return this.x.get<State[]>(url);
   }

  /* Dropdown list for City */
  getCity():Observable<City[]> {
    let url = 'http://localhost:8080/listOfCity';
    return this.x.get<City[]>(url);
  }

  /* Dropdown list for Skill */
  getSkill():Observable<Skill[]> {
    let url = 'http://localhost:8080/listOfSkill';
    return this.x.get<Skill[]>(url);
  }

  /* Vendor Registration Page */
  vendorInsert(obj:Vendor, file:File):Observable<Status>
  {
    const formdata: FormData = new FormData();
    formdata.append('file', file );
    formdata.append('vendor', JSON.stringify(obj));

    let url = "http://localhost:8080/vendorRegistration";
    return this.x.post<Status>(url,formdata);
  }

  /* Login Page */
  Login(login:Login):Observable<MyObject>
  {
    let url = 'http://localhost:8080/loginpage';
    return this.x.post<MyObject>(url, login);
  }

  /* Dropdown list for State in Customer Profile View 1 */
  SearchState(a: any):Observable<Vendor[]> {
    let url = 'http://localhost:8080/vendorlistfromstate?a=' + a;
    return this.x.get<Vendor[]>(url);
  }

  /* Dropdown list for City in Customer Profile View 1 */
  SearchStateCity(a: any, b:any):Observable<Vendor[]> {
    let url = 'http://localhost:8080/vendorlistfromstatecity?a=' + a + '&b=' + b;
    return this.x.get<Vendor[]>(url);
  }

  /* Dropdown list for City in Customer Profile View 1 */
  SearchStateCitySkill(a: any, b:any, c:any):Observable<Vendor[]> {
    let url = 'http://localhost:8080/vendorlistfromstatecityskill?a='+ a + '&b=' + b + '&c=' + c;
    return this.x.get<Vendor[]>(url);
  }

  updateCustomer(obj:Customer):Observable<Customer>
  {
    let url = 'http://localhost:8080/UpdateCustomer';
    return this.x.post<Customer>(url, obj);
  }

  vendorupdate(obj:Vendor):Observable<Vendor>
  {
    let url = 'http://localhost:8080/UpdateVendor';
    return this.x.post<Vendor>(url, obj);
  }

  /* Fetch Customer details using Session Storage */
  customerFetch(y: any):Observable<Customer>
  {
    let url = 'http://localhost:8080/CustomerDeatilsFetch?x=' + y;
    return this.x.get<Customer>(url);
  }

  /* Hire Vendor */
  hirevendor(obj:Hire):Observable<Status>
  {
    let url = 'http://localhost:8080/RequestForHire';
    return this.x.post<Status>(url, obj);
  }

  GetDetails(y: any):Observable<Vendor>
  {
    let url = 'http://localhost:8080/VendorDeatilsFetch?x=' + y;
    return this.x.get<Vendor>(url);
  }

  GetHireDetails(obj:Vendor):Observable<Hire[]>
  {
    let url = 'http://localhost:8080/HireVendorDeatilsFetch';
    return this.x.post<Hire[]>(url, obj);
  }

  AcceptRequest(y: any):Observable<Status>
  {
    let url = 'http://localhost:8080/AcceptRequestForCustomer?x=' + y;
    return this.x.get<Status>(url);
  }

  RejectRequest(y: any):Observable<Status>
  {
    let url = 'http://localhost:8080/RejectRequestForCustomer?x=' + y;
    return this.x.get<Status>(url);
  }

  mailToVendor(obj:Mail):Observable<Status>
  {
    let url = 'http://localhost:8080/SendMailToVendor';
    return this.x.post<Status>(url, obj);
  }

  forgotpassword(y:any):Observable<Status>
  {
    let url = 'http://localhost:8080/Forgotpassword?x=' + y;
    return this.x.get<Status>(url);
  }

  resetpasswordlink(y:any, z:any):Observable<Status>
  {
    let url = 'http://localhost:8080/reset_password?x=' + y + '&b=' + z;
    return this.x.get<Status>(url);
  }

  getchdeatails(y:any):Observable<MyObject>
  {
    let url = 'http://localhost:8080/GetDeatilsBasedOnMobileno?x=' + y;
    return this.x.get<MyObject>(url);
  }

//====================================================================================================================================

//                                                  ADMIN COMPONENT  

//====================================================================================================================================


  // select customer by city
  selectCustomerByCity( y : any ): Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/CustomerCity?city=' + y;
    return this.x.get<NodeStatus[]>(url);
  }

  // select customer by state
  selectCustomerByState( y:any): Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/CustomerState?state=' + y;
    return this.x.get<NodeStatus[]>(url);
  }

  // select all customer
  selectCustomer( y : any ): Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/selectcustomer?=' + y;
    return this.x.get<NodeStatus[]>(url);
  }

  selectVendor( y : any ): Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/selectvendor?=' + y;
    return this.x.get<NodeStatus[]>(url);
  }

  // select vendor by city
  selectVendorsByCity(y: any):Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/VendorCity?cityname=' + y;
    return this.x.get<NodeStatus[]>(url);
  }

  // select vendor by state
  selectVendorsByState(y: any):Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/VendorState?state=' + y;
    return this.x.get<NodeStatus[]>(url);
  }

  // delete vendor
  deleteVendor(y: any):Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/DeleteVendor?mobileno=' + y;
    return this.x.get<NodeStatus[]>(url);
  }

  // delete customer
  deleteCustomer(y: any):Observable<NodeStatus[]>
  {
    let url = 'http://localhost:8081/DeleteCustomer?mobileno=' + y;
    return this.x.get<NodeStatus[]>(url);
  }
}
