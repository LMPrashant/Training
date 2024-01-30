package com.jan_1;
import java.util.Scanner;

public class TC003_ControlState {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int n =5;
		int m = 1;
		
		while(n>0) {
			System.out.println("n : " +n);
			n--;
		}
		
		do {
			System.out.println("m: "+m);
			m--;
		}
		
		while(m>0);
		while(true) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Any number between 0 to 4");
		int i = sc.nextInt();
		
		switch(i) {
		case 0:
			System.out.println("i value is 0");
			break;
		case 1:
			System.out.println("i value is 1");
			break;
		case 2:
			System.out.println("i value is 2");
			break;
		case 3:
			System.out.println("i value is 3");
			break;
		case 4:
			System.out.println("i value is 4");
			break;
			
		default :
			System.out.println("Wrong Number");
			
			}
		}
		
	}

}
