package com.natwest.service;

import com.natwest.exception.CustomerAlreadyExistException;
import com.natwest.exception.CustomerNotFoundException;
import com.natwest.model.Customer;

import jakarta.servlet.ServletException;

public interface ICustomerService {
	
	public Customer saveCustomer(Customer custObj) throws CustomerAlreadyExistException;
	
    public boolean validateUserService(String email, String password) throws CustomerNotFoundException;
    
    public String generateToken(String username, String password) throws ServletException, CustomerNotFoundException;

}