package com.cg.eis.pl;

import com.cg.eis.bean.Employee;

public interface EmployeeService {
	 	void getEmployeeDetails(Employee employee);
	    void findInsuranceScheme(Employee employee);
	    void displayEmployeeDetails(Employee employee);
	}

