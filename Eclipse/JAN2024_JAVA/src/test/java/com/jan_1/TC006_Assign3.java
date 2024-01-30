package com.jan_1;

public class TC006_Assign3 {
	
	private String fname;
	private String lname;
	private char gender;
	private String phone;
	
	public TC006_Assign3(String fname, String lname, char gender,String phone) {
		this.phone=phone;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
	}
	
	public TC006_Assign3() {
	
	}	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone=phone;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public void printdata() {
		System.out.println("First Name: "+ fname+" Last Name: "+ lname+ " Gender: " + gender+"phone:"+phone);
	}
}
