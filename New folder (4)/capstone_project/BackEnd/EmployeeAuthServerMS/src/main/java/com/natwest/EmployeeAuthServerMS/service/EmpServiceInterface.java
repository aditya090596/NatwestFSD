package com.natwest.EmployeeAuthServerMS.service;



import com.natwest.EmployeeAuthServerMS.Entity.ChangePWD;
import com.natwest.EmployeeAuthServerMS.Entity.Employee;
import com.natwest.EmployeeAuthServerMS.exception.EmployeeEmailAlreadyExistException;
import com.natwest.EmployeeAuthServerMS.exception.EmployeeIDAlreadyExistException;
import com.natwest.EmployeeAuthServerMS.exception.EmployeeNotFoundException;
import com.natwest.EmployeeAuthServerMS.exception.PasswordIncorrectException;

public interface EmpServiceInterface {
	
	public Employee addEmployee(Employee empObj) throws EmployeeEmailAlreadyExistException, EmployeeIDAlreadyExistException;
	
    public Employee validateEmployeeService(Employee empObj) throws EmployeeNotFoundException, PasswordIncorrectException;
    
    public Employee changePassword(ChangePWD empObj) throws EmployeeNotFoundException, PasswordIncorrectException;

}