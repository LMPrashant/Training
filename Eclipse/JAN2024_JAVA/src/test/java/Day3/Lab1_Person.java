package Day3;

public class Lab1_Person {

	public String name;
	public int age;
	public Lab1_Person(String fname, int age) {
		
		this.name = fname;
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "Lab2_Person [name=" + name + ", age=" + age + "]";
	}
	
}
	

