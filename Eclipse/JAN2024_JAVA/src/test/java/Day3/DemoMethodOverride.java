package Day3;

class SwipeMachine{
	void readCard() {
		System.out.println("Reading SwipeMachine");
	}
}

class Chipmachine extends SwipeMachine{
	@Override
	void readCard() {
		super.readCard();
		System.out.println("Reading chipMachine");
	}
}
public class DemoMethodOverride {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//SwipeMachine obj = new SwipeMachine();
		//obj.readCard();
		Chipmachine obj = new Chipmachine();
		obj.readCard();
		
		
	}

}
