/* class Emplooyee{
    
    constructor(){
        this.id = 0;
        this.name = "";
        this.dept = "";
    }
}*/


class Emplooyee{
    
    constructor(id,name,dept,sal){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.sal = sal;
    }

    add = (a,b) =>{ 
        console.log(a+b);
    }

    display = () =>{
        console.log(this.id + " "+ this.dept+" "+this.sal);
    }

    hike = (amt) =>{
        this.sal = this.sal+amt;
        this.display();
    }
}
let obj = new Emplooyee();
obj.id = 101;
obj.name = "Rina";
obj.dept = "Tester";


/* console.log(obj.name);
console.log(obj);  */

let obj1 = new Emplooyee(2,"Rina","Developer");
/* console.log(obj1);
console.log(obj1.dept); */
obj1.display();

let obj2 = new Emplooyee(2,"Rina","Developer");
obj2.sal = 25000;
//console.log(obj2);
obj2.hike(5000);

let obj3 = new Emplooyee();
//obj3.add(3,3); 