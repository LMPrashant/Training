package Day5;

public class DemoArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String [] country = new String[5];
		country[0] = "Mumbai";
		country [1] = "Pune";
		country[2] = "Goa";
		country[3]="Satara";
		country[4]="Bombay";
		
		for (String item : country) {
			System.out.println(item);
		}
		System.out.println(country.length);
		
		int [][] arr = {{1,2},{3,4}};
		
		for(int i=0;i<arr.length;i++) {
			for(int j=0;j<arr.length;j++) {
				System.out.println(arr[i][j]);
			}
		}
		
		
		
		
	}

}
