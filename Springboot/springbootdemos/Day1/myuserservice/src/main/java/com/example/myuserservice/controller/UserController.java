package com.example.myuserservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myuserservice.service.IUserService;



// localhost:8081/api/v1/getuserDetails

@RestController
@RequestMapping("api/v1") 
public class UserController 
{
	
	@Autowired
	private IUserService userservice;
	
	private ResponseEntity<?> responseentity;
	
	

	@GetMapping("/getUDetails")
	public ResponseEntity<?> getAllUserHandler()
	{
		responseentity = new ResponseEntity(this.userservice.getAllUsers(),HttpStatus.OK);
		return responseentity;
	}
	
	
	

}
