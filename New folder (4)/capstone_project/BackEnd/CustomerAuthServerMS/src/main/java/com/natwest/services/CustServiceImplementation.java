package com.natwest.services;

import com.natwest.Entity.ChangePWD;
import com.natwest.Entity.Customer;
import com.natwest.Exceptions.AccountAlreadyRegisteredException;
import com.natwest.Exceptions.EmailNotFoundException;
import com.natwest.Exceptions.EmailAlreadyRegisteredException;
import com.natwest.Exceptions.PasswordIncorrectException;
import com.natwest.Repository.CustRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CustServiceImplementation implements CustServiceInterface{

    private CustRepoInterface custRepo;
    private PasswordEncoder passwordEncoder;

    // Constructor of the page.
    @Autowired
    public CustServiceImplementation(CustRepoInterface custRepo) {
        super();
        this.custRepo = custRepo;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // The following method will check if the email address and account number is already registered in the database. If not, it will save the customer in the database and registration will be successful or else it will throw exception.
    @Override
    public Customer saveCustomer(Customer custObj) throws EmailAlreadyRegisteredException, AccountAlreadyRegisteredException {

        String EncodedPassword = this.passwordEncoder.encode(custObj.getPassword());
        custObj.setPassword(EncodedPassword);

        Customer findByEmail = this.custRepo.findByEmail(custObj.getEmail());
        Customer findByAccount = this.custRepo.findByAccount(custObj.getAccountnumber());
        Customer custAdded;

        if (findByEmail != null) {
            throw new EmailAlreadyRegisteredException();
        } else if (findByAccount != null) {
            throw new AccountAlreadyRegisteredException();
        } else {
            UUID uuid=UUID.randomUUID();
            custObj.setCustID(String.valueOf(uuid));
            custAdded = this.custRepo.save(custObj);
        }
        return custAdded;
    }

    // This method will search for the customer in database using their email address while logging in and then match the password entered against the password stored in database and return Customer object.
    @Override
    public Customer validateUser(Customer custObj) throws EmailNotFoundException, DataAccessResourceFailureException, PasswordIncorrectException {

        Customer custDetails = this.custRepo.findByEmail(custObj.getEmail());

        if(custDetails != null){
            boolean passwordMatcher = this.passwordEncoder.matches(custObj.getPassword(), custDetails.getPassword());
            if(passwordMatcher) {
                return custDetails;
            } else {
                throw new PasswordIncorrectException();
            }
        } else {
            throw new EmailNotFoundException();
        }
    }

    public Customer changePassword(ChangePWD custObj) throws EmailNotFoundException, PasswordIncorrectException {
        Customer custDetails = this.custRepo.findByEmail(custObj.getEmail());
        Customer updatedCustomer = null;
        if(custDetails != null){
            boolean passwordMatcher = this.passwordEncoder.matches(custObj.getCurrentPassword(), custDetails.getPassword());
            if(passwordMatcher) {
                String EncodedPassword = this.passwordEncoder.encode(custObj.getNewPassword());
                custDetails.setPassword(EncodedPassword);
                updatedCustomer = this.custRepo.save(custDetails);
            } else {
                throw new PasswordIncorrectException();
            }
        } else {
            throw new EmailNotFoundException();
        }
        return updatedCustomer;
    }
}