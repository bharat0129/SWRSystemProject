import { City } from './city';
import { Skill } from './skill';
import { State } from './state';

export class Vendor  {
    
    firstname:String;
    lastname:String;
    email:String;
    mobileno:number;
    address:String;
    password:any;
    age:number;
    skilldescription:String;
    fkstate:object;
    fkcity:object;
    fkskill:object;
    image:String;
    cost:number;

    constructor(a:String,b:String,c:String,d:number,e:String,f:any,g:number,h:String,i:object,j:object,k:object,l:String,m:number)
    {
        this.firstname = a;
        this.lastname = b;
        this.email = c;
        this.mobileno = d;
        this.address = e;
        this.password = f;
        this.age = g;
        this.skilldescription = h;
        this.fkstate = i;
        this.fkcity = j;
        this.fkskill = k;
        this.image = l;
        this.cost = m;
    }

}
