package com.natwest.service;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import com.natwest.exception.EmployeeAlreadyExistException;

import com.natwest.model.Employee;
import com.natwest.repository.IEmployeeRepository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
public class ServiceTest {
	@Mock
	private IEmployeeRepository emprepo;
	@InjectMocks
	private EmployeeServiceImplementation empservice;
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
	public void testAddEmployee()throws EmployeeAlreadyExistException{
		 when(emprepo.save(any(Employee.class))).thenReturn(empobj);
		 
		 Employee actual= empservice.addEmployee(new Employee());
		 
		 assertEquals(empobj,actual); 
		 verify (emprepo,times(1)).save(any(Employee.class));
	}
	

}
