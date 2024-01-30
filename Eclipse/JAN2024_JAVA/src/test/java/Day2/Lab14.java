package Day2;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Scanner;

public class Lab14 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Country name to get date & time: ");
		String country = sc.next();
		
		ZonedDateTime timedate = ZonedDateTime.now(ZoneId.of(country));
		System.out.println("current time and date: "+country+" "+timedate);
	}

}
