import { Customer } from "./customer";
import { Vendor } from "./vendor";

export class MyObject {

    cust:Customer
    ven:Vendor

    constructor( cust:Customer, ven:Vendor)
    {
        this.cust = cust;
        this.ven = ven;
    }
}
