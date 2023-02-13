package com.restapidemo2.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapidemo2.entity.Course;
import com.restapidemo2.services.courseservice;

@RestController
public class JavaController {
	
	@Autowired
	private courseservice Courseservice;
	private ResponseEntity<?> responseentity;

	@GetMapping ("/courses")
	public List<Course> courses () {
		return this.Courseservice.getallcourses();}
		
		@GetMapping ("/courses/{id}")
		public Optional<Course> getById(@PathVariable("id")int id) {
			 
			return this.Courseservice.getCourseById(id);
		
		}
		@PostMapping("/courses") 
		public Course savecourse(@RequestBody Course course) {
			return this.Courseservice.savecourse(course);
		}
		
		@PutMapping("/update/{id}") 
		public ResponseEntity<?> changeUserdetails (@RequestBody Course course, @PathVariable int id) {
			
			Course c=this.Courseservice.update(course, id);
//			return this.changeUserdetails(course, id);
//			
			responseentity = new ResponseEntity(c,HttpStatus.OK);
			
			return responseentity;
		}
		@GetMapping("/test")
		public void testing () {
			System.out.println("Hi");
		}
		
//		@PutMapping("/updateUserById/{uid}")
//		public ResponseEntity<?> updateUserByIdHandler(@RequestBody User userObj, @PathVariable int uid)
//		{
//			User uObj = this.userservice.updateUser(userObj,uid);
//			responseentity = new ResponseEntity(uObj,HttpStatus.OK);
//			return responseentity;
//		}
	}

