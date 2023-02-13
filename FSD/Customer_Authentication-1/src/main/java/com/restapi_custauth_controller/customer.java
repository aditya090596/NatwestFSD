package com.restapi_custauth_controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.restapi_custauth_model.customerdetails;
import com.restapi_custauth_service.CustomerAlreadyExistsException;
import com.restapi_custauth_service.DataNotFound;
//import com.restapi_custauth_service.CustomerAlreadyExistsException;
import com.restapi_custauth_service.Icustservice;


@RestController
@RequestMapping("api/v1")
public class customer {

	
	private Icustservice custservicve;
	@Autowired
	public customer(Icustservice custservicve) {
		super();
		this.custservicve=custservicve;
	}
	private ResponseEntity<?> responseentity;
	

	
	@GetMapping("/getHome")
	public String getHome() 
	{
		return "testing";
	}
	
	
	
	@PostMapping("/addcustomer")
	public customerdetails addUserDetails(@RequestBody  customerdetails custObj) throws CustomerAlreadyExistsException  {
		
		System.out.println("Inside addUserdetails ... 1");
				customerdetails customerDetails = null;
			
				customerDetails = this.custservicve.savecustomer(custObj);
//				System.out.println(cusomerDetails.toString);
				// TODO Auto-generated catch block
			
				
				System.out.println("Inside addUserdetails ...2");
			

			
		

		return customerDetails;
	}
	
	
//	@PostMapping("/addcustomer")
//	public ResponseEntity<?> addUserDetails(@RequestBody  customer_details custObj) throws CustomerAlreadyExistsException  {
//		
//			customer_details customerDetails;
//			
//				customerDetails = this.custservicve.savecustomer(custObj);
//			 
//				// TODO Auto-generated catch block
//			
//			
//
//			responseentity = new ResponseEntity(customerDetails, HttpStatus.CREATED);
//		
//
//		return responseentity;
//	}
	
//	
//		
//		
//	}
//	
	@GetMapping("/getAll")
	public ResponseEntity<?> getUserDetails() throws DataNotFound {
		try {
		List<customerdetails> cstDetails = this.custservicve.getAllCustomer();
		responseentity = new ResponseEntity<>(cstDetails, HttpStatus.OK);
		} catch (DataNotFound ee) {
			ee.printStackTrace();
			
			responseentity = new ResponseEntity <>("Data not found !!!", HttpStatus.NOT_FOUND);
		}

		
		return responseentity ;
	}
}