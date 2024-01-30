package Day2;

import java.util.Scanner;

public class Lab9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter any String: ");
		String str = sc.nextLine();
		StringBuilder s = new StringBuilder(str);
		
		System.out.println("Enter your choice: ");
		System.out.println("1. Add string to itself. ");
		System.out.println("2. Replace odd position with #. ");
		System.out.println("3. Remove duplicate character. ");
		System.out.println("4. Change odd character to Uppercase. ");
		int i = sc.nextInt();
		
		
			switch(i) {
			case 1:
				System.out.println("Enter string to add: ");
				String s1 = sc.next();
				System.out.println(str.concat(s1));
				break;
				
			case 2:
				for(int n=0;n<str.length();n++) {
					char ch = str.charAt(n);
					if(n%2 != 0) {
						System.out.print(ch);
						
					}else {
						ch= '#';
						System.out.print(ch);						
					}
					
				}
				break;
			
			case 3:
				for(int a=0;a<s.length();a++) {
					char ch1 = s.charAt(a);
					boolean isDuplicate = false;
					for(int b = 0;b<a;b++) {
						if(s.charAt(b)==ch1) {
							isDuplicate = true;
							break;
						}
					}
					if(!isDuplicate) {
						System.out.print(ch1);
					}
					
				}
				break;
			
			case 4:
				for(int n=0;n<str.length();n++) {
					char ch = str.charAt(n);
					if(n%2 == 0) {
						System.out.print(ch);
						
					}else {
						System.out.print(Character.toUpperCase(ch));
					}
					
				}
				break;
			default:
				System.out.println("Enter correct choice");
				break;
			}
		
		}
}
