package Classes_and_Object;

import java.util.Scanner;

import com.jan_1.TC006_Assign3;

public class TC006_AssignMain {


public static void main(String[] args) {
		// TODO Auto-generated method stub

		TC006_Assign3 tc = new TC006_Assign3();
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Mobile Number");
		String num = sc.next();
		tc.setFname("Joya");
		System.out.println(tc.getFname());
		
		tc.setLname("Gaikwad");
		System.out.println(tc.getLname());
		
		tc.setGender('F');
		System.out.println(tc.getGender());
		
		tc.setPhone(num);
		System.out.println(tc.getPhone());
		
		System.out.println("Enter second number");
		String num1=sc.next();
		
		TC006_Assign3 tc1 = new TC006_Assign3("Rizaa","Dutta",'F',num1);
		tc1.printdata();
	}

}
