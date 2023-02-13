package com.natwest.service;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import com.natwest.exception.CustomerAlreadyExistException;
import com.natwest.model.Customer;
import com.natwest.repository.ICustomerRepository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
public class ServiceTest {
	@Mock
	private ICustomerRepository custrepo;
	@InjectMocks
	private CustomerServiceImplementation custservice;
	private Customer custobj;
	
	@BeforeEach
	public void setup()
	{
		custobj = new Customer();
		
		custobj.setName("ABC");
		custobj.setEmail("sharma.aditya321@gmail.com");
		custobj.setAccount("123456789");
		custobj.setAddress("GGN");
		custobj.setCity("Gurgao");
		custobj.setPostcode("122001");
		custobj.setPhonenumber("1234567890");
		custobj.setPassword("hi!1234567");
		
		
//		ArrayList custList = new ArrayList();
//		custList.add(custList);

	}
	@AfterEach
	public void tearDown()
	{
		custobj=null;
	}
	@Test
	public void testSaveCustomer()throws CustomerAlreadyExistException{
		 when(custrepo.save(any(Customer.class))).thenReturn(custobj);
		 
		 Customer actual= custservice.saveCustomer(new Customer());
		 
		 assertEquals(custobj,actual); 
		 verify (custrepo,times(1)).save(any(Customer.class));
	}
	

}
