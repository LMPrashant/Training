package com.jan_1;

import java.util.Scanner;

public class TC005_Assign2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a number : ");
		int i = sc.nextInt();
		
		if(i>=0) {
			System.out.println("i Value is Positive: "+ i );
		}else
			System.out.println("i value is Negative: "+ i);
		
	}

}
