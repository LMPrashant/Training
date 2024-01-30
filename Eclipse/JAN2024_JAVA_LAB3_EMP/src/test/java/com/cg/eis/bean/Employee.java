package com.cg.eis.bean;

public class Employee {

	public int id;
	public String name;
	public double salary;
	public String designation;
	public String insuranceSchema;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getInsuranceSchema() {
		return insuranceSchema;
	}
	public void setInsuranceSchema(String insuranceSchema) {
		this.insuranceSchema = insuranceSchema;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + ", designation=" + designation
				+ ", insuranceSchema=" + insuranceSchema + "]";
	}	
}
