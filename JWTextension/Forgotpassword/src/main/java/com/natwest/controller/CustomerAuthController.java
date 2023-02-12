package com.natwest.controller;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.exception.CustomerAlreadyExistException;
import com.natwest.exception.CustomerNotFoundException;
import com.natwest.model.Customer;
import com.natwest.model.EmailRequest;
import com.natwest.repository.ICustomerRepository;
import com.natwest.service.ICustomerService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpSession;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class CustomerAuthController {
	
	private ICustomerService customerservice;
	
	@Autowired
	private ICustomerRepository custrepo;
	@Autowired
	public CustomerAuthController(ICustomerService customerservice) {
		super();
		this.customerservice = customerservice;
	}
			
	private Map<String,String> map = new HashMap<>();
	private Map<String,String> map1 = new HashMap<>();
	Random random =new Random(1000);
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody Customer custObj) throws CustomerAlreadyExistException
	{
	
			Customer custDetails =  this.customerservice.saveCustomer(custObj);
			
			return new ResponseEntity(custDetails, HttpStatus.CREATED);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody Customer custObj) throws CustomerNotFoundException
	{
	
		try {
			
			String jwtToken = generateToken(custObj.getEmail(), custObj.getPassword());
		
			map.put("message", "User Successfully LoggedIn");
			
			map.put("token", jwtToken);
			
//			String status = HttpStatus.OK.toString();
//			map.put("status", status);
		
		} catch (Exception e) {
			
			map.put("message", e.getMessage());
			map.put("token", null);
			
			return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map, HttpStatus.OK);
		
	}
	
	public String generateToken(String email, String password) throws ServletException, CustomerNotFoundException {

		String jwtToken = "";
		
		if(email == null || password == null) {
			
			throw new ServletException("Please send valid username and password");
			
		}
		
		boolean flag = 	customerservice.validateUserService(email, password);
		
		if(!flag)
			throw new ServletException("Invalid Credentials");
		else {
			jwtToken = Jwts.builder()
					        .setSubject(email)
					        .setIssuedAt(new Date())
					        .setExpiration(new Date(System.currentTimeMillis() + 3000000))
					        .signWith(SignatureAlgorithm.HS256, "secret key")
					        .compact();
		}
		return jwtToken;
	}
	
	@PutMapping("/update/{email}")
	public ResponseEntity<?> updatedpassword(@RequestBody Customer cusObj ,@PathVariable String email) throws CustomerNotFoundException {
		
		Customer updatedinfo =this.customerservice.changepassword(cusObj, email);
		return new ResponseEntity(updatedinfo, HttpStatus.CREATED);
	}
	
	@GetMapping("/sendotp")
	public String sendotp() {
		
		
	int opt =random.nextInt(999999);
	
	System.out.println(opt);
	 return "verify-otp";
	}
	@RequestMapping(value="/sendemail",method= RequestMethod.POST)
	public ResponseEntity<?> forgotpassword(@RequestBody EmailRequest request) throws AddressException {
		boolean result= this.customerservice.sendEmail(request.getMessage(),request.getSubject(),request.getEmail());
		if (result) {
			return  ResponseEntity.ok("Email sent");
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email not sent");
		}
		
		
	}
	
	@PostMapping("/forgot")
	public ResponseEntity<?> sendotp(@RequestBody  EmailRequest email, HttpSession session) throws UnsupportedEncodingException, AddressException {
		System.out.println("Email" + email );
		int otp = random.nextInt(999999);
		System.out.println("OTP" +otp);
		// write code for send otp to email 
		String message = "<h1> OTP = "+otp+" </h1>";
		String subject = "OTP from Postman";
		String to=email.getEmail();

		Boolean flag= this.customerservice.sendEmail(message, subject, to);
		
		
		if (flag) 
		
		{ 
			session.setAttribute("myotp", otp);
			session.setAttribute("email", email);
//			map1.put("status", HttpStatus.OK.toString());
			
			String status = HttpStatus.OK.toString();
			map1.put("status", status);
		  return new ResponseEntity(map1, HttpStatus.OK);
//			  return ResponseEntity.status(HttpStatus.OK).body("Email  sent");
			
			
		}
		else {
			
			session.setAttribute("message", "checkyouremailid");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email not sent");
		}
		
	}
	
	@PostMapping("/verifyotp")
	public ResponseEntity<?> verifyotp (@RequestParam("otp") int otp,HttpSession session) {
		 int myotp=(int)session.getAttribute("my otp");
		 
		 String email=(String) session.getAttribute("email");
		 
		 if (myotp == otp)
		 { 
			 
			 Optional<Customer> cust = this.custrepo.findByEmail(email);
		 
		 if ( cust.isPresent()) {
			 return ResponseEntity.status(HttpStatus.OK).body(" Enter your otp");}
		 else {
			 session.setAttribute("message","Email address is not registered" );
			 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" Try again with registred email");
		 }
		 }
		
		 else {
			 session.setAttribute("message", "You've enetred incorrect otp");
			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Try again");
		 }
	}
	
}
