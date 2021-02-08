export class Mail {

    sentTo:String;
    customerName:String;
    vendorName:String;
    date:Date;

    constructor(sentTo:String, customerName:String, vendorName:String, date:Date){

        this.sentTo = sentTo;
        this.customerName = customerName;
        this.vendorName = vendorName;
        this.date = date;
    }
}
