package com.restapi_custauth_service;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND, reason="Details not found !!!")
public class DataNotFound extends Exception{

}
