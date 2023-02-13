package com.restapi_custauth_service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.restapi_custauth_Repository.ICustRepository;
import com.restapi_custauth_model.Customer;

@Service
public class Customerservice implements ICustomerservice {

	@Autowired
	private ICustRepository custrepository;
	@Override
	public Customer saveUser(Customer custobj) throws CustomerAlreadyExistsException {
		// TODO Auto-generated method stub
Optional<Customer> cust = this.custrepository.findByemail(custobj.getEmail());
		
		Customer addedUser=null;
		
		if(cust.isPresent())
		{
			System.out.println("User details Already Exists !!!! ");
			throw new CustomerAlreadyExistsException();
		}
		else
		{
			addedUser = this.custrepository.save(custobj);
		}
		
	
		return addedUser;

}
}
