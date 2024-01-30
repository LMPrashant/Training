package JUnitDemo;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class TC001_Junit {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		System.out.println("This Before Classs");
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		System.out.println("This after Classs");
	}

	@Before
	public void setUp() throws Exception {
		System.out.println("This Before");
	}

	@After
	public void tearDown() throws Exception {
		System.out.println("This is tearAfter");
	}

	@Test
	public void test() {
		//fail("Not yet implemented");
		System.out.println("This is Test");
	}
	@Test
	public void test1() {
		//fail("Not yet implemented");
		System.out.println("This is Test1");
	}
	@Test
	public void test2() {
		//fail("Not yet implemented");
		System.out.println("This is Test2");
	}

}
