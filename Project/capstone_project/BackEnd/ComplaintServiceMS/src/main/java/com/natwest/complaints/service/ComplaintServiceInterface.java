package com.natwest.complaints.service;

import java.util.List;

import com.natwest.complaints.entity.Complaint;
import com.natwest.complaints.exception.NoComplaintsFound;
import com.natwest.complaints.exception.ServerDown;

public interface ComplaintServiceInterface {

	public List<Complaint> getAllComplaints( String custID) ;
	
	public List<Complaint> allOpenComplaint(String status) ;
	
	public Complaint registercomplaint(Complaint compObj) throws ServerDown;
	
	public Complaint addEmpComments (Complaint compObj, String id ) ;

}