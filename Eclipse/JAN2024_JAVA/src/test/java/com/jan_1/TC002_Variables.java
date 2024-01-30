package com.jan_1;

public class TC002_Variables {
	
	public double wdth;
	public double height;
	public double depth;
	private static int boxid=2;
	
	public double volume(double a,double b,double c) {
		double deltemp;
		wdth = a;
		height = b;
		depth = c;
		deltemp = wdth*height*depth;
		
		return deltemp;
	}
	
	public static void changeBox(int a) {
		boxid = a;
		System.out.println("BoxId: "+boxid);
	}
	public static void changeBox(int a,int b) {
		boxid = a;
		System.out.println("BoxId: "+boxid);
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		TC002_Variables obj = new TC002_Variables();
		System.out.println("volume : "+obj.volume(10,20,10));
		
		System.out.println("BoxId: " +boxid);
		
		changeBox(3);
	}

}
