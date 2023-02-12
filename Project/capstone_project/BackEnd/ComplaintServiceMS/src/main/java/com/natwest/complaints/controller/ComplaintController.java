package com.natwest.complaints.controller;

import java.util.List;
import com.natwest.complaints.repository.ComplaintRepositoryInterface;
import com.natwest.complaints.service.ComplaintServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.natwest.complaints.entity.Complaint;
import com.natwest.complaints.exception.NoComplaintsFound;
import com.natwest.complaints.exception.ServerDown;

@RestController
@RequestMapping("/complaint")
public class ComplaintController {
 
	@Autowired
	private ComplaintServiceInterface compService;
	@Autowired
	private ComplaintRepositoryInterface compRepo;

	// Get all complaints raised by a customer using customerID as path variable
	@GetMapping("/getbyuser/{custID}")
	public ResponseEntity<?> AllComplaints (@PathVariable String custID){
		List <Complaint> complaints=this.compService.getAllComplaints(custID) ;
		return new ResponseEntity(complaints, HttpStatus.OK);
	}

	// Get one complaint by complaint ID:
	@GetMapping("/getbyid/{compID}")
	public ResponseEntity<?> AllComplaintsById (@PathVariable String compID){
		Complaint complaint = this.compRepo.findById(compID).get();
		return new ResponseEntity(complaint, HttpStatus.OK);
	}
	
	// for Employees to get complaints using status ... can get any status
	@GetMapping("/findbystatus/{open}")
	public ResponseEntity<?> activeComplaints(@PathVariable String open){
		List<Complaint> activeComplaints = this.compService.allOpenComplaint(open);
		return new ResponseEntity(activeComplaints, HttpStatus.OK);
	} 
	
	@PostMapping("/raisecomplaint")
	public ResponseEntity<?> registerComplaints(@RequestBody Complaint newComp) throws ServerDown {

		Complaint complaint = this.compService.registercomplaint(newComp);
		return new ResponseEntity(complaint, HttpStatus.OK);
	}

}