package com.natwest.service;

import java.util.Optional;

import com.natwest.controller.Changepwd;
import com.natwest.exception.EmployeeAlreadyExistException;
import com.natwest.exception.EmployeeNotFoundException;
import com.natwest.exception.PasswordIncorrectException;
import com.natwest.model.Employee;

import jakarta.servlet.ServletException;

public interface IEmployeeService {
	
	public Employee addEmployee(Employee empObj) throws EmployeeAlreadyExistException;
	
    public Employee validateEmployeeService(Employee embobj) throws EmployeeNotFoundException, PasswordIncorrectException;
    
    public String generateToken(Employee eobj) throws ServletException, EmployeeNotFoundException, PasswordIncorrectException;
    public Employee changePassword(Changepwd EmpObj) throws EmployeeNotFoundException, PasswordIncorrectException;
    
    public Employee getbyid( String id ) throws EmployeeNotFoundException;

   
}