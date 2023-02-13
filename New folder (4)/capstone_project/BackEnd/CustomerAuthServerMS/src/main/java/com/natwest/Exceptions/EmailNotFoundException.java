package com.natwest.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.UNAUTHORIZED, reason= "Email address incorrect. Please check and try again.")
public class EmailNotFoundException extends Exception { };