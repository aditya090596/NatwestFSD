package com.restapi_custauth_model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class customerdetails {

	
	
	private String Name;
	private String Address;
	@Id
	private String email;
	private String city;
	private String Account; 
	private String Phonenumber;
	private String Postcode;
	private String password;
	private String  confirmpassword;
	
	
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAccount() {
		return Account;
	}
	public void setAccount(String account) {
		Account = account;
	}
	public String getPhonenumber() {
		return Phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		Phonenumber = phonenumber;
	}
	public String getPostcode() {
		return Postcode;
	}
	public void setPostcode(String postcode) {
		Postcode = postcode;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	@Override
	public String toString() {
		return "customerdetails [Name=" + Name + ", Address=" + Address + ", email=" + email + ", city=" + city
				+ ", Account=" + Account + ", Phonenumber=" + Phonenumber + ", Postcode=" + Postcode + ", password="
				+ password + ", confirmpassword=" + confirmpassword + "]";
	}
	
	
}
