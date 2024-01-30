package Day2;

import java.time.Instant;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class TC003_Date_Time {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Instant currenttime = Instant.now();
		System.out.println("Current date & time is : "+ currenttime);
		
		LocalDate date1=LocalDate.now();
		System.out.println("Current Date: "+date1);
		
		LocalDate ind = LocalDate.of(1947, Month.AUGUST, 15);
		System.out.println(ind);
		
System.out.println("Independence day: "+ ind);    //1947-08-15
		
		System.out.println("Tomorrow: "+date1.plusDays(1));      //2024-01-04
	System.out.println("Last Month"+date1.minusMonths(1));       //2023-12-03
	
	ZonedDateTime ct=ZonedDateTime.now();
	System.out.println("Indian time: "+ct);
	
	ZonedDateTime ctparis = ZonedDateTime.now(ZoneId.of("Europe/Paris"));
	System.out.println("Paris current time and date: "+ctparis);
	
	Period p1= date1.until(ind);
	System.out.println(p1);//   
	System.out.println("Days: "+p1.get(ChronoUnit.DAYS));   //Enum ChronoUnit. A standard set of date periods units.
	System.out.println("Months: "+p1.get(ChronoUnit.MONTHS));
	System.out.println("Years: "+p1.get(ChronoUnit.YEARS));
		
		//DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/mm/yyyy");
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your date of birth in yyyy-mm-dd");
		String input = sc.next();
		sc.close();
		LocalDate dob = LocalDate.parse(input);
		System.out.println(dob);
		
		int date2 = Period.between(dob, date1).getYears();
		System.out.println(date2);
	}

}
