package com.natwest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
@SpringBootTest
class AuthServerApplicationTests {

	private Calculator c= new Calculator();
	@Test
	void contextLoads() {
	}
   @Test
	void testsum(){
		 int expectedresult=20;
	int result =c.dosum(12, 8);
	assertThat(result).isEqualTo(expectedresult);
}

//@Test
//void addition() {
//  assertEquals(2, calculator.add(1, 1));
//}
}
