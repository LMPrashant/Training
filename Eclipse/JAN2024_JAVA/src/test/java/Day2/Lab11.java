package Day2;

import java.time.LocalDate;
import java.time.Period;
import java.util.Scanner;

public class Lab11 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		LocalDate date1 = LocalDate.now();
		System.out.println(date1);
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your date in yyyy-mm-dd");
		//DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT); 
		String input = sc.next();
		
		sc.close();
		LocalDate check = LocalDate.parse(input);
		System.out.println(check);
		
		Period diff = check.until(date1);
		
		System.out.println("Years: "+diff.getYears()+" Months : "+diff.getMonths()+" Days : "+diff.getDays());
	}

}
