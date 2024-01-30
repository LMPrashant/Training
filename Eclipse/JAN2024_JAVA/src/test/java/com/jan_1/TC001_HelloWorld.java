package com.jan_1;

public class TC001_HelloWorld {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("Hello world");
		
		int a,b,c,d,e;
		a=5;
		b=10;
		c=a+b;
		d=a*b;
		e=a-b;
		
		System.out.println("c value is: "+ c);
		System.out.println("d value is: "+ d);
		System.out.println("e value is: "+ e);
		
		for(int i=0;i<5 ;i++) {
			System.out.println(i+"\n");
		}
		
		if(a==b) {
			System.out.println(a);
		}
		else
			System.out.println("Not Equal");
	}

}
