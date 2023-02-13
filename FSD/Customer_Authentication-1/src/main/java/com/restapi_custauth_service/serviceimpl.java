package com.restapi_custauth_service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi_custauth_Repository.Irepository;

import com.restapi_custauth_model.customerdetails;
@Service
public class serviceimpl implements Icustservice {
    @Autowired
	private Irepository repository;
	
    @Override
	public customerdetails savecustomer(customerdetails custObj) throws CustomerAlreadyExistsException {
		// TODO Auto-generated method stub
    	
		System.out.println("Inside addUserdetails Servcie ...1");
Optional<customerdetails> optionalUser = this.repository.findByemail(custObj.getEmail());

System.out.println("Inside addUserdetails Servcie ...2"+ optionalUser.get());
customerdetails addedUser=null;
		
		if(optionalUser.isPresent())
		{
			System.out.println("Customer details Already Exists !!!! ");
			throw new CustomerAlreadyExistsException();
		}
		else
		{
			System.out.println("Inside addUserdetails Servcie ...3");
			addedUser = this.repository.save(custObj);
		}
		
	
		System.out.println("Inside addUserdetails Servcie ...4");
		return addedUser;
	}
	@Override
	public List<customerdetails> getAllCustomer() throws DataNotFound{
		// TODO Auto-generated method stub
		
		List<customerdetails> allcust=this.repository.findAll();
		return allcust;
	}

}
