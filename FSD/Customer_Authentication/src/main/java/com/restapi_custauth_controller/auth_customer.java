package com.restapi_custauth_controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.restapi_custauth_model.Customer;
import com.restapi_custauth_service.CustomerAlreadyExistsException;
import com.restapi_custauth_service.ICustomerservice;

@RestController
@RequestMapping("api/v1")
public class auth_customer {

	@Autowired
	private ICustomerservice customerservice;
	private ResponseEntity<?> responseentity;
	
	@PostMapping("/addcustomer")
	public ResponseEntity<?> addUserDetails(@RequestBody Customer custObj) throws CustomerAlreadyExistsException {
		try {
			Customer customerDetails = this.customerservice.saveUser(custObj);

			responseentity = new ResponseEntity(customerDetails, HttpStatus.CREATED);
		} catch (CustomerAlreadyExistsException uaee) {
			System.out.println(uaee.getMessage());
			responseentity = new ResponseEntity("Customer Details Already Exists !!!", HttpStatus.CONFLICT);
		}

		return responseentity;
	}
}
