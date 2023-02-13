package com.natwest.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.exception.CustomerAlreadyExistException;
import com.natwest.exception.CustomerNotFoundException;
import com.natwest.model.Customer;
import com.natwest.repository.ICustomerRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@Service
public class CustomerServiceImplementation implements ICustomerService{
	
	private ICustomerRepository custRepo;
	
	public CustomerServiceImplementation(ICustomerRepository custRepo) {
		super();
		this.custRepo = custRepo;
	}

	@Override
	public Customer saveCustomer(Customer custObj) throws CustomerAlreadyExistException{
		
		Optional<Customer> custDetails = this.custRepo.findByEmail(custObj.getEmail());
		
		Customer custAdded = null;
				
		if(custDetails.isPresent()) {
			
			throw new CustomerAlreadyExistException();
			
		} else {
			
			custAdded = this.custRepo.save(custObj);
		}

		return custAdded;
	}

	@Override
	public boolean validateUserService(String email, String password) throws CustomerNotFoundException {
		
		Customer  customer = this.custRepo.validateUser(email, password);
		
		if(customer != null)
			return true;
		
		else
			
			return false;		
	}

	@Override
	public String generateToken(String email, String password) throws ServletException, CustomerNotFoundException {

		String jwtToken = "";
		if(email == null || password == null) {
			throw new ServletException("Please send valid username and password");
		}
		
		boolean flag = 	validateUserService(email, password);
		if(!flag)
			throw new ServletException("Invalid Credentials");
		else {
			jwtToken = Jwts.builder()
					        .setSubject(email)
					        .setIssuedAt(new Date())
					        .setExpiration(new Date(System.currentTimeMillis() + 3000000))
					        .signWith(SignatureAlgorithm.HS256, "secret key")
					        .compact();
		}
		return jwtToken;
	}
	
}
