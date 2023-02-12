package com.natwest.EmployeeAuthServerMS.Controller;
import java.util.HashMap;
import java.util.Map;

import com.natwest.EmployeeAuthServerMS.Entity.ChangePWD;
import com.natwest.EmployeeAuthServerMS.Entity.Employee;
import com.natwest.EmployeeAuthServerMS.Entity.JwtResponse;
import com.natwest.EmployeeAuthServerMS.Util.JwtUtil;
import com.natwest.EmployeeAuthServerMS.exception.*;
import com.natwest.EmployeeAuthServerMS.service.EmpServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.ServletException;

@RestController
@RequestMapping("/employee")
public class EmployeeAuthController {

	@Autowired
	private JwtUtil jwtUtil;
	private EmpServiceInterface empService;

	@Autowired
	public EmployeeAuthController(EmpServiceInterface empService) {
		super();
		this.empService = empService;
	}
			
	private Map<String,String> map = new HashMap<>();

	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody Employee empObj) throws EmployeeEmailAlreadyExistException, EmployeeIDAlreadyExistException {

			Employee empDetails =  this.empService.addEmployee(empObj);
			return new ResponseEntity(empDetails, HttpStatus.CREATED);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody Employee empObj) throws ServletException, EmployeeNotFoundException, PasswordIncorrectException {

		JwtResponse isLoggedin = this.jwtUtil.generateToken(empObj);
		return ResponseEntity.ok(isLoggedin);
	}
	
	@PostMapping("/changepassword")
    public ResponseEntity<?> doChangePassword(@RequestBody ChangePWD empObj) throws EmployeeNotFoundException, PasswordIncorrectException {

        this.empService.changePassword(empObj);

        return new ResponseEntity<>("Password Changed Successfully", HttpStatus.ACCEPTED);
    }
	
}