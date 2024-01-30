package com.jan_1;

public class TC004_Assign1 {

	
		private String fname;
		private String lname;
		private String gender;
		private int age;
		private double weight;
		
		public void printdata() {
			System.out.println("First Name: "+ fname);
			System.out.println("Last Name: "+ lname);
			System.out.println("Gender: " + gender);
			System.out.println("Age : "+ age);
			System.out.println("Weight : "+ weight);
		}
		
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		TC004_Assign1 person1 = new TC004_Assign1();
		
		person1.fname = "Prashant";
		person1.lname = "Karajagi";
		person1.gender = "Male";
		person1.age = 25;
		person1.weight= 59.9;
		person1.printdata();
	}

}
