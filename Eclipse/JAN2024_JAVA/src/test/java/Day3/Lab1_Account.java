package Day3;
import java.util.UUID;

public class Lab1_Account extends Lab1_Person {

	public String acctnum;
	public double balance;
	public Lab1_Person person;
	Lab1_Account( double balance,Lab1_Person person) {
		super(person.name,person.age);
		this.acctnum = UUID.randomUUID().toString();
		this.balance = balance;
		this.person = person;
		//this.person.age=age;
	}
	public String getAcctnum() {
		return acctnum;
	}
	public void setAcctnum() {
		this.acctnum = UUID.randomUUID().toString();
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public Lab1_Person getPerson() {
		return person;
	}
	public void setPerson(Lab1_Person person) {
		this.person = person;
	}
	public void deposite(int amt) {
		balance+=amt;
		System.out.println("Your amt is deposited in account: "+amt+" And your balance is: "+balance);
	}
	public void withdrawn(int vamt) {
		if(balance>2000) {
		balance-=vamt;
		System.out.println("Your amt is Withdrwan from account: "+vamt+" And your balance is: "+balance);
		}
	}
	public void showDetails() {
		System.out.println(" Account Number is: "+ acctnum+", Balance is: "+balance);
	}
	@Override
	public String toString() {
		return "[ "+" Name= "+person.name +", Age= "+person.age+" balance=" + balance + ", Acctnum+" + getAcctnum()+  "]";
	}
}
