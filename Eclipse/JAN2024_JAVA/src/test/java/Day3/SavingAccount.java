package Day3;

public class SavingAccount extends Lab2_Account {

final double minbalance;
	
	
	public SavingAccount(String accholder, double initialval) {
		super(accholder, initialval);
		this.minbalance = 2000;
	}

	@Override
	public void withdraw(double withdraw) {
		if(balance>=minbalance) {
			balance-=withdraw;
			System.out.println("Your balance is : "+ balance);
		}else
			System.out.println("Minimum Balance insufficient");
	}
}
