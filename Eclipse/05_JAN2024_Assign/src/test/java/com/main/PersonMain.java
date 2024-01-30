package com.main;

public class PersonMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			 Person p1 = new Person("Neha", 20);
			   p1.getempdetails();
		   }catch(AgeException e){
			   System.out.println(e); 
		   }
	}

}
