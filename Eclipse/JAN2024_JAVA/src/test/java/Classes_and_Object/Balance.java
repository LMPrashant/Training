package Classes_and_Object;

public class Balance {

	String name;
	double bal;
	public Balance(String n, double b){
		name = n;
		bal = b;
	}
	
	public void showBalance() {
		if(bal > 0) {
			System.out.println("Balance of "+name+" is "+bal);
		}
		else
			System.out.println("Low Balance");
	}
}
