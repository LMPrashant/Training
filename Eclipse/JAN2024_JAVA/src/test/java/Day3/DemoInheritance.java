package Day3;

class Base_Parent{
	
	public void showParent() {
		System.out.println("Parent called");
	}
}

class Derived_Child extends Base_Parent{
	public void showChild() {
		super.showParent();
		System.out.println("Child called");
	}
	
}
public class DemoInheritance {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Derived_Child child1 = new Derived_Child();
		child1.showChild();
		//child1.showParent();
		if(child1 instanceof Base_Parent) {
			System.out.println("Yes this instance of Base_Parent");
		}
	}

}
