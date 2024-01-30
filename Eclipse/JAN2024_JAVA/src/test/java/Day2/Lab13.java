package Day2;

import java.time.LocalDate;
import java.util.Scanner;

public class Lab13 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter date of purchase in format yyyy-mm-dd: ");
		String input = sc.next();
		sc.close();
		LocalDate date = LocalDate.parse(input);
		
		LocalDate exdate = date.plusMonths(12);
		
		System.out.println("Your product warranty expire date is: "+ exdate);
	}

}
