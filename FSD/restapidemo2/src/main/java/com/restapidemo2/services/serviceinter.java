package com.restapidemo2.services;

import java.util.List;
//import java.util.Optional;
import java.util.Optional;

import com.restapidemo2.entity.Course;

public interface serviceinter {

	public List<Course> getallcourses ();
	
	public Optional<Course> getCourseById(int id);
	public Course savecourse(Course course);
	
	public Course update (Course course, int id);
}
