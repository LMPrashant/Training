package com.cg.eis.main;

import com.cg.eis.exception.EmployeeException;

public class Main {
	  public static void main(String[] args) {
	        try {
	            validateSalary(2500);  // Replace with the actual salary value
	            // Other operations with valid salary...
	        } catch (EmployeeException e) {
	            System.out.println(e.getMessage());
	            // Handle the exception appropriately...
	        }
	    }

	    private static void validateSalary(double salary) throws EmployeeException {
	        if (salary < 3000) {
	            throw new EmployeeException("Salary cannot be below 3000");
	        }
	        // Continue with processing if salary is valid
	    }
}
