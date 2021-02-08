export class Customer {
    customername:string;
    email:any;
    mobileno:any;
    address:string;
    state:string;
    city:string;
    password :any;

   constructor(a:string,b:any,c:string,d:string,e:string,f:string,g:any){
       this.customername=a;
       this.email=b;
      this.mobileno=c;
      this.address=d;
      this.state=e;
      this.city=f;
      this.password=g;
   }
}