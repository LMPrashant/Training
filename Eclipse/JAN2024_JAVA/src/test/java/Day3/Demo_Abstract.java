package Day3;


abstract class shapes{
	abstract void draw();
}

class Rect extends shapes{

	@Override
	void draw() {
		System.out.println("This is Reactangle shape");
	}
	
}
public class Demo_Abstract {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Rect s1 = new Rect();
		s1.draw();
	}

}
