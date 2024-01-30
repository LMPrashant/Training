package JUnitDemo;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class PersonJunit {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		Person p2 = new Person("Prashant","Kar");
		System.out.println(p2.getFname());
		System.out.println(p2.getLname());
		System.out.println(p2.toString());
		assertEquals("Prashant Kar",p2.toString());
	}

}
