package com.natwest.complaints.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.INTERNAL_SERVER_ERROR, reason= "Please be aware that we're performing routine server maintenance at the moment.Try Later")
public class ServerDown extends Exception{

}