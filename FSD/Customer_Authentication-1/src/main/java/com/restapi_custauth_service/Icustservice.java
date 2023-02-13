package com.restapi_custauth_service;

import java.util.List;


import com.restapi_custauth_model.customerdetails;

public interface Icustservice  {
	public customerdetails savecustomer (customerdetails custObj) throws CustomerAlreadyExistsException ;
	
	public List<customerdetails> getAllCustomer() throws DataNotFound;
}
