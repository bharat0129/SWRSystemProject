import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(name, mobile) 
  {
    if (name != null && mobile != null) 
    {
      sessionStorage.setItem('customername', name);
      sessionStorage.setItem('mobileno', mobile);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn() {
    let sessionname = sessionStorage.getItem('customername');
    return !(sessionname === null)
    //return (sessionname != null)
  }

  logOut() {
    sessionStorage.removeItem('customername');
    sessionStorage.removeItem('mobileno');
  }
}