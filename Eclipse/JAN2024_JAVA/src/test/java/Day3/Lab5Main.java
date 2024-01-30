package Day3;

public class Lab5Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		SavingAccount sav1 = new SavingAccount("Krish", 4000);
		CurrentAccount cur1 = new CurrentAccount("Mogli", 3000);
		
		sav1.display();
		cur1.display();
		
		sav1.withdraw(2000);
		cur1.withdraw(1000);
	}

}
