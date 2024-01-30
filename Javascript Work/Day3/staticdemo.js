class Customer{
    static shopname = "DMART";
    num = 10;

    constructor(custName,lastName){
        this.custName=custName;
        this.lastname=lastName;
    }

   
/* 
    static printData(){
        console.log(this.shopname);
        console.log(this.num);
        console.log(this.custName);
    } */

}

//console.log(Customer.shopname);

let obj1 = new Customer();

//console.log(obj1.shopname); //static member not accessible
//console.log(typeof(obj1));
obj1.custName = "Priya";
Customer.custName = "Yahoo";
Customer.shopname = "REL";

//console.log(Customer.shopname);
//console.log(obj1.custName);

Customer.printData();

