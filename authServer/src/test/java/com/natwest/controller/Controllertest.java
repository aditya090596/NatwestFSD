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



import com.natwest.model.Employee;
import com.natwest.service.IEmployeeService;



@WebMvcTest(EmployeeAuthController.class)
public class Controllertest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private IEmployeeService empservice;
	
	private Employee empobj;
	
	@BeforeEach
	public void setup()
	{
		empobj = new Employee();
		
		empobj.setFullname("ABC");
		empobj.setEmail("sharma.aditya321@gmail.com");
		empobj.setRole("Developer");
		empobj.setPhonenumber("1234567890");
		empobj.setPassword("hi!1234567");
		
		
//		ArrayList custList = new ArrayList();
//		custList.add(custList);

	}
	@AfterEach
	public void tearDown()
	{
		empobj=null;
	}
	
	@Test
	public void testaddEmployee() throws Exception {
		Mockito.when(empservice.addEmployee(empobj)).thenReturn(empobj);
		mvc.perform(MockMvcRequestBuilders.post("/auth/register")
				.contentType(MediaType.APPLICATION_JSON)
				.content(JSON(empobj)))
		        .andExpect(status().isCreated()
				);
	}

	
	private static String JSON(Employee employee)
	{
		try
		{
			String eobj = new ObjectMapper().writeValueAsString(employee);
			return eobj;
		}
		catch(Exception eobj)
		{
			throw new RuntimeException();
		}
	}
}
