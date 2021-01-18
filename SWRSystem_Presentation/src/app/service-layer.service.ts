import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { City } from './city';
import { Customer } from './customer';
import { Status } from './status';
import { Vendor } from './vendor';
import { State } from './state';
import { Skill } from './skill';


@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {
  [x: string]: any;

  constructor(private x: HttpClient) { }

  multiselect( y: any ): Observable<City[]>
  {
    let url = 'http://localhost:8080/service?x=' + y;
    return this.x.get<City[]>(url);
  }

  customerInsert(obj: Customer ): Observable<Status>
  {
    let url = 'http://localhost:8080/customerRegistration';
    return this.x.post<Status>(url, obj);
  }

  //, file:File
  vendorInsert(obj: Vendor, file : File): Observable<Status>
  {
    const formdata: FormData = new FormData();
    formdata.append('file', file );
    formdata.append('vendor', JSON.stringify(obj));

    let url = "http://localhost:8080/vendorRegistration";
    return this.x.post<Status>(url,formdata);
  }

  getState(): Observable<State[]> {
    let url = 'http://localhost:8080/listOfState';
    return this.x.get<State[]>(url);
   }

  getCity(): Observable<City[]> {
    let url = 'http://localhost:8080/listOfCity';
    return this.x.get<City[]>(url);
  }

  getSkill(): Observable<Skill[]> {
    let url = 'http://localhost:8080/listOfSkill';
    return this.x.get<Skill[]>(url);
  }

  //  sendFile(obj: Vendor, file : File) {
    
  //     const formdata: FormData = new FormData();
  //     formdata.append('file', file );
  //     formdata.append('vendor', JSON.stringify(obj));
  //     this.x.post("http://localhost:8080/vendorRegistration", formdata, { observe: 'response', responseType: 'text'}).subscribe();
  //   }
}
