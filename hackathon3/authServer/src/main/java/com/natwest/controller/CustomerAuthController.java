package com.natwest.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.exception.CustomerAlreadyExistException;
import com.natwest.exception.CustomerNotFoundException;
import com.natwest.model.Customer;
import com.natwest.service.ICustomerService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class CustomerAuthController {
	
	private ICustomerService customerservice;
	
	@Autowired
	public CustomerAuthController(ICustomerService customerservice) {
		super();
		this.customerservice = customerservice;
	}
			
	private Map<String,String> map = new HashMap<>();

	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody Customer custObj) throws CustomerAlreadyExistException
	{
	
			Customer custDetails =  this.customerservice.saveCustomer(custObj);
			
			return new ResponseEntity(custDetails, HttpStatus.CREATED);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody Customer custObj) throws CustomerNotFoundException
	{
	
		try {
			
			String jwtToken = generateToken(custObj.getEmail(), custObj.getPassword());
		
			map.put("message", "User Successfully LoggedIn");
			
			map.put("token", jwtToken);
			
			String status = HttpStatus.OK.toString();
			map.put("status", status);
		
		} catch (Exception e) {
			
			map.put("message", e.getMessage());
			map.put("token", null);
			
			return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map, HttpStatus.OK);
		
	}
	
	public String generateToken(String email, String password) throws ServletException, CustomerNotFoundException {

		String jwtToken = "";
		
		if(email == null || password == null) {
			
			throw new ServletException("Please send valid username and password");
			
		}
		
		boolean flag = 	customerservice.validateUserService(email, password);
		
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
