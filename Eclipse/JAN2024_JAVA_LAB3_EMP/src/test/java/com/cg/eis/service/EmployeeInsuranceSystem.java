package com.cg.eis.service;

import com.cg.eis.bean.Employee;
import com.cg.eis.pl.Service;

public class EmployeeInsuranceSystem {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		 Employee employee = new Employee();
		 Service employeeService = new Service();

	        // Getting employee details
	        employeeService.getEmployeeDetails(employee);

	        // Finding insurance scheme
	        employeeService.findInsuranceScheme(employee);

	        // Displaying employee details
	        employeeService.displayEmployeeDetails(employee);
	}

}
