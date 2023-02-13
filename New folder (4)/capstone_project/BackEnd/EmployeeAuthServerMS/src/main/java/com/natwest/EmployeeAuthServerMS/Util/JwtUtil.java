package com.natwest.EmployeeAuthServerMS.Util;

import com.natwest.EmployeeAuthServerMS.Entity.Complaints;
import com.natwest.EmployeeAuthServerMS.Entity.Employee;
import com.natwest.EmployeeAuthServerMS.Entity.JwtResponse;
import com.natwest.EmployeeAuthServerMS.exception.EmployeeNotFoundException;
import com.natwest.EmployeeAuthServerMS.exception.PasswordIncorrectException;
import com.natwest.EmployeeAuthServerMS.service.EmpServiceInterface;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class JwtUtil {

    @Autowired
    private EmpServiceInterface empService;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.token.validity}")
    private long tokenValidity;

    public JwtResponse generateToken(Employee empObj) throws ServletException, EmployeeNotFoundException, PasswordIncorrectException {

        String jwtToken = "";
        JwtResponse response = new JwtResponse();

        List<Complaints> compList = new ArrayList<>();

        Complaints comp1 = new Complaints();

        comp1.setComplaintID("001");
        comp1.setComplaintDesc("abc");
        comp1.setRaisedBy("cust001");
        comp1.setResponses(null);

        compList.add(comp1);

        if(empObj.getEmail() == null || empObj.getPassword() == null) {
            throw new ServletException("Please send valid email address and password");
        }
        Employee empDetails = 	empService.validateEmployeeService(empObj);

        if (empDetails != null) {
            jwtToken = Jwts.builder()
                    .setSubject(empDetails.getEmail())
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + tokenValidity))
                    .signWith(SignatureAlgorithm.HS256, jwtSecret)
                    .compact();
        }

        response.setEmpID(empDetails.getEmpID());
        response.setEmpName(empDetails.getFullname());
        response.setEmpEmail(empDetails.getEmail());
        response.setToken(jwtToken);
        response.setUsertype("admin");
        response.setComplaintsList(compList);

        return response;
    }
}