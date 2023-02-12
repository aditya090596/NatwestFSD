package com.natwest.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.exception.ResourceNotFound;
import com.natwest.model.Post;
import com.natwest.service.IPostService;

@RestController
@RequestMapping("/api")
public class PostController {

	private IPostService postservice;
	// create post
	
	@PostMapping("/employee/{empid}/category/{catid}/posts")
	public ResponseEntity<?>createpost (@RequestBody Post pobj, @PathVariable String  empid, String  catid) throws ResourceNotFound{
	Post createpost= this.postservice.createpost(pobj, empid, catid);
	
	return new ResponseEntity<>(createpost,HttpStatus.CREATED);
	}
}
