package com.example.myuserservice.service;

import com.example.myuserservice.model.User;
import com.example.myuserservice.repository.IUserRepository;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService
{

    @Autowired
    private IUserRepository userrepository;

    @Override
    public User saveUser(User userObj)
    {
        Optional<User> userOptional = this.userrepository.findById(userObj.getUserId());

        if(userOptional.isPresent())
        {
            System.out.println("Record Already exists !!!");
        }

        User uObj = this.userrepository.save(userObj);

        return uObj;
    }

    @Override
    public User updateUser(User userObj, int uid) {
        
    	Optional<User> userOptional = this.userrepository.findById(uid);

    	User uObj = null;
    	User updatedData = null;
    	
        if(userOptional.isPresent())
        {
        	System.out.println("Record Exists and ready for Update !!!");
        	
        	uObj = userOptional.get();
 
           	uObj.setUsername(userObj.getUsername());
        	uObj.setUserpass(userObj.getUserpass());
        	
        	updatedData = this.userrepository.save(uObj);
        	
        }

        return updatedData;
    }

    @Override
    public List<User> getAllUsers() {
     
    	return this.userrepository.findAll();    	
    }

    @Override
    public User getUserById(int uid) {
       
        Optional<User> userOptional = this.userrepository.findById(uid);

        User uObj=null;
        
        if(userOptional.isPresent())
        {
        	uObj = userOptional.get();
        }

        return uObj;
    	    	
    }

    @Override
    public boolean deleteUser(int uid) {

    	   Optional<User> userOptional = this.userrepository.findById(uid);

           boolean deleteStatus = false;
           
           if(userOptional.isPresent())
           {
        	   this.userrepository.delete(userOptional.get());
           		deleteStatus = true;
           }

           return deleteStatus;
    }
}