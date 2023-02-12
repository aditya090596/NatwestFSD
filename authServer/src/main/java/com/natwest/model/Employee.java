package com.natwest.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;

//import org.springframework.data.annotation.Transient;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;


@Entity
@Table(name="employee")
public class Employee {
	
	@Id
	private String empID;
	private String fullname;
	
	private String email;
	private String role;
	private String phonenumber;
	private String password; 
	
	@Transient
	private List<Complaint> complaints= new ArrayList<>();
	
	@OneToMany(mappedBy="empid",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	private List<Post> posts=new ArrayList<>();

	public Employee() {
		super();
	}

	
	public Employee(String empID, String fullname, String email, String role, String phonenumber, String password) {
		super();
		this.empID = empID;
		this.fullname = fullname;
		this.email = email;
		this.role = role;
		this.phonenumber = phonenumber;
		this.password = password;
	}


	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

	@Override
	public String toString() {
		return "Employee [empID=" + empID + ", fullname=" + fullname + ", email=" + email + ", role=" + role
				+ ", phonenumber=" + phonenumber + ", password=" + password + "]";
	}
	
}