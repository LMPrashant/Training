package Day3;

class Box{
	
	Box(){
		System.out.println("Hello i am box");
	}
	
	Box(double val){
		System.out.println("Total number of box is: "+val);
	}
	
}
public class Polymorphism {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Box obj1 = new Box();
		Box obj2 = new Box(30);
	}

}
