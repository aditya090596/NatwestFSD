package com.natwest.EmployeeAuthServerMS.Entity;

import lombok.*;

public class Complaints {

    private String complaintID;
    private String complaintDesc;
    private String raisedBy;
    private String responses;
    
    
    
	public Complaints() {
		super();
	}
	public Complaints(String complaintID, String complaintDesc, String raisedBy, String responses) {
		super();
		this.complaintID = complaintID;
		this.complaintDesc = complaintDesc;
		this.raisedBy = raisedBy;
		this.responses = responses;
	}
	public String getComplaintID() {
		return complaintID;
	}
	public void setComplaintID(String complaintID) {
		this.complaintID = complaintID;
	}
	public String getComplaintDesc() {
		return complaintDesc;
	}
	public void setComplaintDesc(String complaintDesc) {
		this.complaintDesc = complaintDesc;
	}
	public String getRaisedBy() {
		return raisedBy;
	}
	public void setRaisedBy(String raisedBy) {
		this.raisedBy = raisedBy;
	}
	public String getResponses() {
		return responses;
	}
	public void setResponses(String responses) {
		this.responses = responses;
	}

    
    
}