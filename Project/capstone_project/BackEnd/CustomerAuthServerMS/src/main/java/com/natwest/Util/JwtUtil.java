package com.natwest.Util;

import com.natwest.Entity.Customer;
import com.natwest.Entity.JwtResponse;
import com.natwest.Exceptions.EmailNotFoundException;
import com.natwest.Exceptions.PasswordIncorrectException;
import com.natwest.services.CustServiceInterface;
import io.jsonwebtoken.*;
import jakarta.servlet.ServletException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Date;

@Component
public class JwtUtil {

    @Autowired
    private CustServiceInterface custServiceInterface;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.token.validity}")
    private long tokenValidity;

    // This method will generate a JWT token once the customer is validated and return the token to the controller to be returned to the UI for login.
    public JwtResponse generateToken(Customer custObj) throws ServletException, EmailNotFoundException, PasswordIncorrectException {

        String jwtToken = "";
        JwtResponse jwtResponse = new JwtResponse();

        if (custObj.getEmail() == null || custObj.getPassword() == null) {
            throw new ServletException("Please send valid email address and password");
        }
        Customer custDetails = custServiceInterface.validateUser(custObj);
        jwtToken = Jwts.builder()
                .setSubject(custDetails.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + tokenValidity))
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();

        jwtResponse.setName(custDetails.getFullname());
        jwtResponse.setEmail(custDetails.getEmail());
        jwtResponse.setToken(jwtToken);
        jwtResponse.setUsertype("user");

        ArrayList complaints = restTemplate.getForObject("http://localhost:8083/complaint/getbyuser/"+custDetails.getCustID(), ArrayList.class);

        jwtResponse.setComplaints(complaints);

        return jwtResponse;
    }

}