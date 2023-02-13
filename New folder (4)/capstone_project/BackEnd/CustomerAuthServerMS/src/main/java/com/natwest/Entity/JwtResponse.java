package com.natwest.Entity;

import lombok.*;

import java.util.List;


public class JwtResponse {

    private String name;
    private String email;
    private String token;
    private String usertype;
    private List<Complaints> complaints;
    
    
	public JwtResponse() {
		super();
	}
	public JwtResponse(String name, String email, String token, String usertype, List<Complaints> complaints) {
		super();
		this.name = name;
		this.email = email;
		this.token = token;
		this.usertype = usertype;
		this.complaints = complaints;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public List<Complaints> getComplaints() {
		return complaints;
	}
	public void setComplaints(List<Complaints> complaints) {
		this.complaints = complaints;
	}
	@Override
	public String toString() {
		return "JwtResponse [name=" + name + ", email=" + email + ", token=" + token + ", usertype=" + usertype
				+ ", complaints=" + complaints + "]";
	}
    
    
}