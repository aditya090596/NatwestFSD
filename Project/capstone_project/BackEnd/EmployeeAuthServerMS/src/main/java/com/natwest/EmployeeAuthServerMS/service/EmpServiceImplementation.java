package com.natwest.EmployeeAuthServerMS.service;

import com.natwest.EmployeeAuthServerMS.Entity.ChangePWD;
import com.natwest.EmployeeAuthServerMS.Entity.Employee;
import com.natwest.EmployeeAuthServerMS.exception.EmployeeEmailAlreadyExistException;
import com.natwest.EmployeeAuthServerMS.exception.EmployeeIDAlreadyExistException;
import com.natwest.EmployeeAuthServerMS.exception.EmployeeNotFoundException;
import com.natwest.EmployeeAuthServerMS.exception.PasswordIncorrectException;
import com.natwest.EmployeeAuthServerMS.repository.EmpRepoInterface;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EmpServiceImplementation implements EmpServiceInterface {

	private EmpRepoInterface empRepo;
	private PasswordEncoder passwordEncoder;

	@Autowired
	public EmpServiceImplementation(EmpRepoInterface empRepo) {
		super();
		this.empRepo = empRepo;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	private Logger logger = LoggerFactory.getLogger(EmpServiceImplementation.class);

	@Override
	public Employee addEmployee(Employee empObj) throws EmployeeEmailAlreadyExistException, EmployeeIDAlreadyExistException {

		logger.info(String.valueOf(empObj));

		String EncodedPassword = this.passwordEncoder.encode(empObj.getPassword());
		empObj.setPassword(EncodedPassword);

		Employee findByEmail = this.empRepo.findByEmail(empObj.getEmail());
		Employee findByEmpID = this.empRepo.findByEmpID(empObj.getEmpID());
		Employee empAdded = null;

		if(findByEmail!= null) {
			throw new EmployeeEmailAlreadyExistException();
		} else if(findByEmpID != null){
			throw new EmployeeIDAlreadyExistException();
		} else {
			empAdded = this.empRepo.save(empObj);
		}

		return empAdded;
		
	}

	@Override
	public Employee validateEmployeeService(Employee empObj) throws EmployeeNotFoundException , PasswordIncorrectException {

		 Employee eDetails = this.empRepo.findByEmail(empObj.getEmail());

	        if(eDetails != null){
	            boolean passwordMatcher = this.passwordEncoder.matches(empObj.getPassword(), eDetails.getPassword());
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
	public Employee changePassword(ChangePWD empObj) throws EmployeeNotFoundException, PasswordIncorrectException {
		
		Employee empDetails = this.empRepo.findByEmail(empObj.getEmail());
		
		Employee updatedEmployee=null;
		
		if(empDetails != null) {
			boolean passwordMatcher = this.passwordEncoder.matches(empObj.getCurrentPassword(), empDetails.getPassword());
			if(passwordMatcher) {
              String EncodedPassword = this.passwordEncoder.encode(empObj.getNewPassword());
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
}