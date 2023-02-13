package com.natwest.ConversationMS.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.PARTIAL_CONTENT, reason= "You don't have any comments for this Complaint")
public class NoCommentsFoundException extends Exception{
}