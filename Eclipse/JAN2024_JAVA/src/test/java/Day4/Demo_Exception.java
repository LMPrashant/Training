package Day4;

public class Demo_Exception {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			int a = 5;
			int b = a/1;
			System.out.println(b);
			try {
				int c  = b/0;
				System.out.println(b);
			} catch (Exception e) {
				// TODO: handle exception
				
			}
		} catch (Exception e) {
			// TODO: handle exception
			
			try {
				
			} catch (Exception e2) {
				// TODO: handle exception
			}
			System.out.println("Exception is "+e.getMessage());
		}
	}

}
