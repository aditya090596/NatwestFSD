package com.natwest.service;

import java.util.Date;
import java.util.Optional;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.exception.CustomerAlreadyExistException;
import com.natwest.exception.CustomerNotFoundException;
import com.natwest.model.Customer;
import com.natwest.repository.ICustomerRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@Service
public class CustomerServiceImplementation implements ICustomerService{
	
	private ICustomerRepository custRepo;
	
	public CustomerServiceImplementation(ICustomerRepository custRepo) {
		super();
		this.custRepo = custRepo;
	}

	@Override
	public Customer saveCustomer(Customer custObj) throws CustomerAlreadyExistException{
		
		Optional<Customer> custDetails = this.custRepo.findByEmail(custObj.getEmail());
		
		Customer custAdded = null;
				
		if(custDetails.isPresent()) {
			
			throw new CustomerAlreadyExistException();
			
		} else {
			
			custAdded = this.custRepo.save(custObj);
		}

		return custAdded;
	}

	@Override
	public boolean validateUserService(String email, String password) throws CustomerNotFoundException {
		
		Customer  customer = this.custRepo.validateUser(email, password);
		
		if(customer != null)
			return true;
		
		else
			
			return false;		
	}

	@Override
	public String generateToken(String email, String password) throws ServletException, CustomerNotFoundException {

		String jwtToken = "";
		if(email == null || password == null) {
			throw new ServletException("Please send valid username and password");
		}
		
		boolean flag = 	validateUserService(email, password);
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

	@Override
	public Customer changepassword(Customer custobj, String email) throws CustomerNotFoundException {
		
		Optional <Customer> verifyingemail=this.custRepo.findByEmail(email);
		Customer validemail=null;
		Customer updatedpswd=null;
		if (verifyingemail.isPresent())
		{
			validemail= verifyingemail.get();
			validemail.setPassword(custobj.getPassword());
			updatedpswd=this.custRepo.save(validemail);
				
		}
		
		else {
			throw new CustomerNotFoundException();
		}
		return updatedpswd;
	}
	
	
public boolean sendEmail(String message, String subject, String to) throws AddressException {
	boolean f=false;

	
	InternetAddress address = new InternetAddress();
	
	System.out.println("Message1" + message );
	System.out.println("Subject1" + subject );
	System.out.println("To1" + to );
	String from ="sharma.aditya213@gmail.com";
	
//	address=new InternetAddress(from, false);
	
		//Variable for gmail
		String host="smtp.gmail.com";
		
		//get the system properties
		Properties properties = System.getProperties();
		
		
		System.out.println("PROPERTIES "+properties);
		
		//setting important information to properties object
		
		//host set
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port","465");
		properties.put("mail.smtp.ssl.enable","true");
		properties.put("mail.smtp.auth","true");
		
		
//		Properties props = new Properties();
		properties.setProperty("mail.mime.address.strict", "false");
//		Session ses = Session.g;
//		
		
	
		//Step 1: to get the session object..
		Session session=Session.getInstance(properties, new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {		
				properties.setProperty("mail.mime.address.strict", "false");
				return new PasswordAuthentication("sharma.aditya213@gmail.com", "gmsujujhvijaoyiw");
			}
			
			
			
		});
		
//		 address =new InternetAddress (to, false);
		
       
		session.setDebug(true);
		
		//Step 2 : compose the message [text,multi media]
		MimeMessage m = new MimeMessage(session);
		
		try {
		
		//from email
		m.setFrom(new InternetAddress(from, false) );
		
		//adding recipient to message
		m.addRecipient(Message.RecipientType.TO, new InternetAddress (to));
		
		//adding subject to message
		m.setSubject(subject);
	
		
		//adding text to message
//		m.setText(message);
		
		m.setContent(message,"text/html");
		
		//send 
		
		//Step 3 : send the message using Transport class
		Transport.send(m);
		
		System.out.println("Sent success...................");
		 f= true;
		
		}catch (Exception e) {
			e.printStackTrace();
		}
			return f;
	}
	
}
