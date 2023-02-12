package com.natwest.EmployeeAuthServerMS.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.CONFLICT, reason= "Email address already exist")
public class EmployeeEmailAlreadyExistException extends Exception{

}