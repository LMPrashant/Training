package Day3;

public class Lab5_CurrentAccount2 extends Lab5_Account2{

	final double limit;
	public Lab5_CurrentAccount2(String accholder, double initialval) {
		super(accholder, initialval);
		this.limit=1000;
		// TODO Auto-generated constructor stub
	}
	@Override
	public void withdraw(double amt ) {
		if(limit<amt) {
			balance-=amt;
			System.out.println("Amount withdraw now your balance is: "+balance);
		}
		else
			System.out.println("You exceed the limit");
	}
}
