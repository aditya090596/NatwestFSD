package com.natwest.complaints.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.PARTIAL_CONTENT, reason= "You don't have any registered Complaint")
public class NoComplaintsFound extends Exception {

	
}