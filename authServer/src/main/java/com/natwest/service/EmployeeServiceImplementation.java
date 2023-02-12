package com.natwest.service;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.natwest.controller.Changepwd;
import com.natwest.exception.EmployeeAlreadyExistException;
import com.natwest.exception.EmployeeNotFoundException;
import com.natwest.exception.PasswordIncorrectException;
import com.natwest.model.Employee;
import com.natwest.repository.IEmployeeRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@Service
public class EmployeeServiceImplementation implements IEmployeeService{
	@Autowired
	private IEmployeeRepository empRepo;
	private PasswordEncoder passwordEncoder;
	@Autowired
	public EmployeeServiceImplementation(IEmployeeRepository empRepo) {
		super();
		this.empRepo = empRepo;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	@Override
	public Employee addEmployee(Employee empObj) throws EmployeeAlreadyExistException{
		
		String EncodedPassword = this.passwordEncoder.encode(empObj.getPassword());
		empObj.setPassword(EncodedPassword);
		Employee EmpDetails = this.empRepo.findByEmail(empObj.getEmail());
		
		Employee empAdded = null;
				
		if(EmpDetails!= null) {
			
			throw new EmployeeAlreadyExistException();
			
		} else {
			
			empAdded = this.empRepo.save(empObj);
		}

		return empAdded;
		
	}

	@Override
	public Employee validateEmployeeService(Employee eobj) throws EmployeeNotFoundException , PasswordIncorrectException {
		
		 Employee eDetails = this.empRepo.findByEmail(eobj.getEmail());

	        if(eDetails != null){
	            boolean passwordMatcher = this.passwordEncoder.matches(eobj.getPassword(), eDetails.getPassword());
	            if(passwordMatcher) {
	                return eDetails;
	            } else {
	                throw new PasswordIncorrectException();
	            }
	        } else {
	            throw new EmployeeNotFoundException();
	        }	
	}

	@Override
	public String generateToken(Employee empobj) throws ServletException, EmployeeNotFoundException, PasswordIncorrectException {
		
		 String jwtToken = "";

	        if(empobj.getEmail() == null || empobj.getPassword() == null) {
	            throw new ServletException("Please send valid email address and password");
	        }
	        Employee empDetails = 	validateEmployeeService(empobj);
	            jwtToken = Jwts.builder()
	                    .setSubject(empDetails.getEmail())
	                    .setIssuedAt(new Date())
	                    .setExpiration(new Date(System.currentTimeMillis() + 600000))
	                    .signWith(SignatureAlgorithm.HS256, "RHVsaGFuIGtlIHZpZGFpIGthIHRpbWUgYWEgZ3lhIGhhaQ==") //Dulhan ke vidai ka time aa gya hai
	                    .compact();

	        return jwtToken;
	}

	@Override
	public Employee changePassword(Changepwd EmpObj) throws EmployeeNotFoundException, PasswordIncorrectException {
		
		Employee empDetails = this.empRepo.findByEmail(EmpObj.getEmail());
		
		Employee updatedEmployee=null;
		
		if(empDetails != null) {
			boolean passwordMatcher = this.passwordEncoder.matches(EmpObj.getCurrentPassword(), empDetails.getPassword());
			if(passwordMatcher) {
              String EncodedPassword = this.passwordEncoder.encode(EmpObj.getNewPassword());
              empDetails.setPassword(EncodedPassword);
              updatedEmployee=this.empRepo.save(empDetails);
            } else {
            throw new PasswordIncorrectException();
        }
    } else {
        throw new EmployeeNotFoundException();
   }
    return updatedEmployee;
		}
	
	@Override
	public Employee getbyid(String email) throws EmployeeNotFoundException{
		
	Employee empobj= this.empRepo.findByEmail(email);
	
	if (empobj != null) {
		 return empobj;
	} else {
		throw new EmployeeNotFoundException();
	}
	}
	
	
}
