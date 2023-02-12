package com.natwest.controller;

import com.natwest.Entity.ChangePWD;
import com.natwest.Entity.Customer;
import com.natwest.Entity.JwtResponse;
import com.natwest.Exceptions.AccountAlreadyRegisteredException;
import com.natwest.Exceptions.EmailAlreadyRegisteredException;
import com.natwest.Exceptions.EmailNotFoundException;
import com.natwest.Exceptions.PasswordIncorrectException;
import com.natwest.Util.JwtUtil;
import com.natwest.services.CustServiceInterface;
import jakarta.servlet.ServletException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/customer")
public class CustomerAuthController {

    private CustServiceInterface custServiceInterface;
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    public CustomerAuthController(CustServiceInterface custServiceInterface) {
        super();
        this.custServiceInterface = custServiceInterface;
    }

    private Logger logger = LoggerFactory.getLogger(CustomerAuthController.class);

    private Map<String, String> map = new HashMap<String, String>();

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Customer custObj) throws EmailAlreadyRegisteredException, AccountAlreadyRegisteredException {

        Customer custDetails =  this.custServiceInterface.saveCustomer(custObj);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> doLogin(@RequestBody Customer custObj) throws ServletException, EmailNotFoundException, PasswordIncorrectException {

        JwtResponse isLoggedin = this.jwtUtil.generateToken(custObj);
        return ResponseEntity.ok(isLoggedin);
    }

    @PostMapping("/changepassword")
    public ResponseEntity<?> doChangePassword(@RequestBody ChangePWD custObj) throws EmailNotFoundException, PasswordIncorrectException {
        this.custServiceInterface.changePassword(custObj);
        return new ResponseEntity<>("Password Changed Successfully", HttpStatus.ACCEPTED);
    }
}