package com.natwest.controller;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;


import com.natwest.model.Customer;
import com.natwest.service.ICustomerService;



@WebMvcTest(CustomerAuthController.class)
public class Controllertest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private ICustomerService custservice;
	
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
	public void testSaveCustomer() throws Exception {
		Mockito.when(custservice.saveCustomer(custobj)).thenReturn(custobj);
		mvc.perform(MockMvcRequestBuilders.post("/auth/register")
				.contentType(MediaType.APPLICATION_JSON)
				.content(JSON(custobj)))
		        .andExpect(status().isCreated()
				);
	}

	
	private static String JSON(Customer customer)
	{
		try
		{
			String cobj = new ObjectMapper().writeValueAsString(customer);
			return cobj;
		}
		catch(Exception eobj)
		{
			throw new RuntimeException();
		}
	}
}
