package com.restapi_custauth_service;


import com.restapi_custauth_model.Customer;


public interface ICustomerservice {
	public Customer saveUser(Customer custObj) throws CustomerAlreadyExistsException ;
	


}
