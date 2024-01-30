package Day5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class LAB3_4_DemoArray2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String[] pname = {"Colgate","Soup","Brush","Scrubber","Conditioner"};
		for(String n:pname) {
			System.out.println(n);
		}
		System.out.println("==========================");
		Arrays.sort(pname);
		System.out.println("This sorted Array");
		for(String s:pname) {
			System.out.println(s);
		}
		
		ArrayList list = new ArrayList();
		
		list.add(pname);
		
		Collections.sort(list);
		
		
	
	
		
	}

}
