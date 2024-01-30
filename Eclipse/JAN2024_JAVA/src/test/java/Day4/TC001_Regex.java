package Day4;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TC001_Regex {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		 String str1 = "Welcome" ;
		 String pattern = "Welcome";
		 boolean patternmatch = Pattern.matches(str1, pattern);
		 
		 System.out.println("Matching: " + patternmatch);
		 
		 String input = "Shop,Mop,Hopping,Chopping";
		 Pattern p1 = Pattern.compile("hop");
		 Matcher m1 = p1.matcher(input);
		 System.out.println(m1.matches());
		 while(m1.find()) {
			 System.out.println(m1.group()+" : "+m1.start()+":"+m1.end());
		 }
		 
		 String n1 = "0123456789";
		 Pattern p3  =Pattern.compile("\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d");
		 String s1 = "Welcome to Amazon 12345";
		 
		 String email = "prashant@gmail.com";
		 Pattern emailPattern = Pattern.compile("^(.+)@(\\S).*(.com)$");
		 
		 //Pattern p2 = Pattern.compile("^[A-Z].*[0-9]$");
		 Pattern p2 = Pattern.compile("^[A-Z].*[0-9]$");
		 Matcher m2 = p2.matcher(s1);
		 Matcher m3 = p3.matcher(n1);
		 
		 String adhaar  ="1234 1234 1234";
		 Pattern adhaarPattern  =Pattern.compile("^\\d{4}\\s\\d{4}\\s\\d{4}$");
		 Matcher m5 = adhaarPattern.matcher(adhaar);
				 
		 Matcher m4 = emailPattern.matcher(email);
		 if(m2.find()) {
			 System.out.println("Pattern Matched");
		 }else {
			 System.out.println("Pattern not matched");
		 }
		 
		 if(m3.find()) {
			 System.out.println("Phone Pattern Matched");
		 }else {
			 System.out.println("Phone Pattern not matched");
		 }
		 
		 if(m4.find()) {
			 System.out.println("Email Pattern Matched");
		 }else {
			 System.out.println("Email Pattern not matched");
		 }
		 
		 if(m5.find()) {
			 System.out.println("Adhaar Pattern Matched");
		 }else {
			 System.out.println("Adhaar Pattern not matched");
		 }
		 
		 
	}

}
