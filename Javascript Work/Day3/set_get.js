class Customer{
    static shopname = "DMART";
    num = 10;

    constructor(custName,lastName){
        this.custName=custName;
        this.lastname=lastName;
    }

    set lastName(newname){
        return this._lastName = newname;
    }

    get lastName(){
        return this._lastName;
    }

    fullName = () => {
        console.log(this.custName+" "+this.lastName)
    }
}

let obj2 = new Customer("Priya","paul");

//obj2.setlastName("paul");
//obj2._lastName = "Palak"

//obj2.fullName();
console.log(obj2.lastName);