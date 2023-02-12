package com.natwest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.CONFLICT, reason= "Email address already exist")
public class EmployeeAlreadyExistException extends Exception{

}