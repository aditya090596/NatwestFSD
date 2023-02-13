package com.natwest.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason= "Account number already exist")
public class AccountAlreadyRegisteredException extends Exception {
};