package com.main;



public class EmployeeMain_3_1 {

	public static void main(String[] args) {
		Employee employee=new Employee();
	     employee.setFname("Prashant");
	     employee.setLname("");
	     employee.setAge(22);
	    
	        EmployeeName ck = new EmployeeName();
	        try {
	            ck.empdetails(employee.getFname(),employee.getLname());
	 System.out.println("Employee name is "+employee.getFname()+" "+employee.getLname()+" "+employee.getAge());
	        } catch (InvalidNameException e) {
	            System.out.println("Invalid Name " + e.getMessage());
	        }
	}
}
