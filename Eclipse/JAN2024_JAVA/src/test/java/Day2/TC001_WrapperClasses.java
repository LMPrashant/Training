package Day2;

public class TC001_WrapperClasses {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String strval = "12345";
		int c = 100;
		System.out.println(c+strval);
		int d = Integer.parseInt(strval);
		System.out.println(d+c);
	}

}
