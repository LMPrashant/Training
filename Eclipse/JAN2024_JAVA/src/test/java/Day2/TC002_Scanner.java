package Day2;

import java.util.Scanner;

public class TC002_Scanner {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		 Scanner sc = new Scanner("1 2 3 4 5 6 7 8 9");
		 while(sc.hasNextInt()) {
			 int num = sc.nextInt();
			 if(num%2==0) {
				 System.out.println(num);
			 }
			 else
				 System.out.println(num + "is odd number");
		 }
	}

}
