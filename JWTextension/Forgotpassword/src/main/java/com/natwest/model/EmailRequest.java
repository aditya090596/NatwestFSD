package com.natwest.model;

public class EmailRequest {

	private String email;
	private String subject;
	private String message;
	
	
	public EmailRequest() {
		super();
	}
	public EmailRequest(String to, String subject, String message) {
		super();
		this.email = email;
		this.subject = subject;
		this.message = message;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "EmailRequest [email=" + email + ", subject=" + subject + ", message=" + message + "]";
	}
	
}
