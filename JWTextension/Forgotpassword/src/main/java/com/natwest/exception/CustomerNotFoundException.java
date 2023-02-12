package com.natwest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND, reason= "Email address not registered")
public class CustomerNotFoundException extends Exception{

}
