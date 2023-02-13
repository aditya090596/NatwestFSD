package com.restapi_custauth_service;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.CONFLICT, reason="Customer details already exists !!!")
public class CustomerAlreadyExistsException extends Exception {

}
