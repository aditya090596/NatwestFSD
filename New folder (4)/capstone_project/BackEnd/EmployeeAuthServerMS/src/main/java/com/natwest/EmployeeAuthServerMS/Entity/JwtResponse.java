package com.natwest.EmployeeAuthServerMS.Entity;

import lombok.*;
import org.bouncycastle.pqc.math.linearalgebra.PolynomialRingGF2;

import java.util.List;

public class JwtResponse {

    private String empID;
    private String empName;
    private String empEmail;
    private String token;
    private String usertype;
    private List<Complaints> complaintsList;
    
    
	public JwtResponse() {
		super();
	}
	public JwtResponse(String empID, String empName, String empEmail, String token, String usertype,
			List<Complaints> complaintsList) {
		super();
		this.empID = empID;
		this.empName = empName;
		this.empEmail = empEmail;
		this.token = token;
		this.usertype = usertype;
		this.complaintsList = complaintsList;
	}
	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpEmail() {
		return empEmail;
	}
	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
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
	public List<Complaints> getComplaintsList() {
		return complaintsList;
	}
	public void setComplaintsList(List<Complaints> complaintsList) {
		this.complaintsList = complaintsList;
	}
    
   

}