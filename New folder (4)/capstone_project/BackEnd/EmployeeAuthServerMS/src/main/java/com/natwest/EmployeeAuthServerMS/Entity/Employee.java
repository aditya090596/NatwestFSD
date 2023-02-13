package com.natwest.EmployeeAuthServerMS.Entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name="employee")
public class Employee {

	@Id
	@Column(name="empID")
	private String empID;

	@Column(name="fullname")
	private String fullname;

	@Column(name="email")
	private String email;

	@Column(name="role")
	private String role;

	@Column(name="phonenumber")
	private String phonenumber;

	@Column(name="password")
	private String password;
	
	

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