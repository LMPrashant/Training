package Day3;

public class Lab1_Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Lab1_Person pers1 = new Lab1_Person("Prashant",24);
		Lab1_Account acct1 = new Lab1_Account(2000,pers1);
		acct1.name="Prashant";
		acct1.setAge(25);
		acct1.setAcctnum();
		//System.out.println(acct1.getAcctnum());
		acct1.setBalance(2000);
		System.out.println("Account balance is: "+acct1.getBalance());
		System.out.println(acct1.toString());
		//acct1.showDetails();
		acct1.deposite(3000);
		acct1.withdrawn(500);
		System.out.println(acct1.toString());

	}

}
