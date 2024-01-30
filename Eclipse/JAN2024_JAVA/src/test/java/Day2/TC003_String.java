package Day2;

public class TC003_String {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String str1 = new String("Pooja");
		String str2 = new String("Sam");
		System.out.println("String1 : "+str1+" String2 : "+str2);
		String str3 = new String("pooja");
		String str4 = str3;
		System.out.println("String3 : "+str3+" String4 : "+str4);
		
		System.out.println("Length: " + str1.length());
		System.out.println("Indexof: "+str1.indexOf("j"));
		String s1 = "What a busy Day";
		System.out.println(s1.trim()+s1.concat("Hello"));
		System.out.println(s1.substring(7,15));
		System.out.println(str1.equals(s1));
		
		StringBuffer sb =new StringBuffer("abc");
		System.out.println(sb.append(" to cdf"));
	}

}
