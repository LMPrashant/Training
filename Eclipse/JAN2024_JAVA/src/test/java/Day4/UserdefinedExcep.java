package Day4;

import java.util.Scanner;

class AgeException extends Exception {

	private int age;
	
	AgeException(int a){
		age = a;
		
	}
	public String toString() {
		return age+" Is an invalid age";
	}
	
}	
	
class Emp{
	String name;
	int age;
	
	void getempDetails() throws AgeException {
		System.out.println("Enter your name: ");
		Scanner sc = new Scanner(System.in);
		name = sc.nextLine();
		
		System.out.println("Enter age: ");
		age = sc.nextInt();
		
		if(age<16) {
			throw new AgeException(age);
		}else
			System.out.println("Name: "+name+", Age: "+age);
	}
	
}
	
	
public class UserdefinedExcep{	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			Emp e1 = new Emp();
			e1.getempDetails();
		} catch (Exception e) {
			e.toString();
			System.out.println(e);
		}	
	}

}
