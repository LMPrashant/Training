package com.jan_1;

public class Ex_const {
	
	int mathM;
	int sciM;
	int engM;
	public Ex_const(int mathM, int sciM, int engM) {
		
		this.mathM = mathM;
		this.sciM = sciM;
		this.engM = engM;
	}
	
	public void total() {
		int totalMarks = mathM+sciM+engM;
		System.out.println(totalMarks);
	}
	
	

}
