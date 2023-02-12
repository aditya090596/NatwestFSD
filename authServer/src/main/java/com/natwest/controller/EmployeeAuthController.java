package com.natwest.controller;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.exception.EmployeeAlreadyExistException;
import com.natwest.exception.EmployeeNotFoundException;
import com.natwest.exception.PasswordIncorrectException;
import com.natwest.model.Employee;
import com.natwest.service.IEmployeeService;


import jakarta.servlet.ServletException;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeAuthController {
	
	private IEmployeeService employeeservice;
	
	@Autowired
	public EmployeeAuthController(IEmployeeService employeeservice) {
		super();
		this.employeeservice = employeeservice;
	}
			
	private Map<String,String> map = new HashMap<>();

	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody Employee empObj) throws EmployeeAlreadyExistException
	{
	
			Employee empDetails =  this.employeeservice.addEmployee(empObj);
			
			return new ResponseEntity(empDetails, HttpStatus.CREATED);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody Employee empObj) throws ServletException, EmployeeNotFoundException, PasswordIncorrectException
	{
	
		try {
			
			String jwtToken =this.employeeservice.generateToken(empObj);
		
			map.put("message", "Employee Successfully LoggedIn");
			
			map.put("token", jwtToken);
			
//			String status = HttpStatus.OK.toString();
//			map.put("status", status);
		
		} catch (Exception e) {
			
			map.put("message", e.getMessage());
			map.put("token", null);
			
			return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map, HttpStatus.OK);
		
	}
	
	@PostMapping("/changepassword")
    public ResponseEntity<?> doChangePassword(@RequestBody Changepwd eObj) throws EmployeeNotFoundException, com.natwest.exception.PasswordIncorrectException {

        this.employeeservice.changePassword(eObj);

        return new ResponseEntity<>("Password Changed Successfully", HttpStatus.ACCEPTED);
    }
	
	@GetMapping ("/getemployee/{id}")
	public ResponseEntity <?> getById(@PathVariable String id ) throws EmployeeNotFoundException {
		 
		Employee emp= employeeservice.getbyid(id);
		
		return new ResponseEntity(emp, HttpStatus.OK);
	
	}
	
}
