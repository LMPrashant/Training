package com.main;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class Lab5_4ExceptionJunit {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
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
