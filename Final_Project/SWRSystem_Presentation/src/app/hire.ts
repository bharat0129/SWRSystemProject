import { Time } from "@angular/common";

export class Hire {

    vendorId:Object;
    customerId:Object;
    date:Date;
    time:Time;

    constructor(vendorId:Object, customerId:Object, date:Date, time:Time)
    {
        this.vendorId = vendorId;
        this.customerId = customerId;
        this.date = date;
        this.time = time;
    }
}
