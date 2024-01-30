package JUnitDemo;

public class Person{
		private String fname;
		private String lname;
	
public Person(String fn,String ln) {
	if(fn.isEmpty() && ln.isEmpty()) {
		throw new IllegalArgumentException("Null value not allowed");
	}else {
		this.fname=fn;
		this.lname=ln;
	}
}
public String getFname() {
	return this.fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getLname() {
	return this.lname;
}

public void setLname(String lname) {
	this.lname = lname;
}

@Override
public String toString() {
	return  fname +" "+ lname;
}

}
	//public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Person p = new Person("","");
//		//System.out.println(p.getFname());
//@Test
//public void test() {
//	
//	Person p2 = new Person("Pk","RK");
//	System.out.println(p2.getFname());
//}
//		
//}
