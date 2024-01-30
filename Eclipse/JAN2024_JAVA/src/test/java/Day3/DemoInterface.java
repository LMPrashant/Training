package Day3;

interface DemoInterface {

	public int add(int a, int b);
}

class SimpleCalc implements DemoInterface{

	@Override
	public int add(int x, int y) {
		// TODO Auto-generated method stub
		return x+y;
	}
	
}