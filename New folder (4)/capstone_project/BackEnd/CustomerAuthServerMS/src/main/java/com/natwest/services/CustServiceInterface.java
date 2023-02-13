package com.natwest.services;

import com.natwest.Entity.ChangePWD;
import com.natwest.Entity.Customer;
import com.natwest.Exceptions.AccountAlreadyRegisteredException;
import com.natwest.Exceptions.EmailAlreadyRegisteredException;
import com.natwest.Exceptions.EmailNotFoundException;
import com.natwest.Exceptions.PasswordIncorrectException;
import jakarta.servlet.ServletException;
import org.springframework.dao.DataAccessResourceFailureException;

public interface CustServiceInterface {

    public Customer saveCustomer(Customer custObj) throws EmailAlreadyRegisteredException, AccountAlreadyRegisteredException;

    public Customer validateUser(Customer custObj) throws EmailNotFoundException, DataAccessResourceFailureException, PasswordIncorrectException;

    public Customer changePassword(ChangePWD custObj) throws EmailNotFoundException, PasswordIncorrectException;


}