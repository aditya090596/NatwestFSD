package com.natwest.EmployeeAuthServerMS.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason= "Employee ID already registered")
public class EmployeeIDAlreadyExistException extends Exception{
}