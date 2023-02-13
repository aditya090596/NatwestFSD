package com.restapidemo2.services;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.restapidemo2.entity.Course;
import com.restapidemo2.entity.Repinterface;

@Service
public  class courseservice implements serviceinter {
	@Autowired
	private Repinterface repinterface;
 
//private static 	List<Course> list1=new ArrayList<>();
//	{list1.add(new Course (121,"Java Programmer","Java"));
//			list1.add(new Course (132,"Python Programmer","Python"));}
	
//	private  static List <Book> list=new ArrayList<>();
//	static {list.add(new Book(11,"Java programmer","XYZ"));
//	 list.add(new Book(12,"Python programmer","PQR"));
//	 list.add(new Book(13,"Kotlin programmer","LMN"));}
	@Override
	public List<Course> getallcourses() {
		// TODO Auto-generated method stub
		return repinterface.findAll();
	}

	
	@Override
	public Optional<Course> getCourseById(int id) {
		// TODO Auto-generated method stub
//		
//		Course cr=list1.stream().filter(i->i.getId()==id).findFirst().get();
		return repinterface.findById(id);
	}

	@Override
	public Course savecourse(Course course) {
		// TODO Auto-generated method stub
		return repinterface.save(course);
	}

	public Course update (Course course, int id) {
		Optional<Course> changedata= this.repinterface.findById(id);
		Course b = null;
		Course updateddata=null;
		 if (changedata.isPresent())
			 b= changedata.get();
//			 b.setCoursename(course.getCoursename());
			  b.setTitle(course.getTitle());
			  updateddata= this.repinterface.save(b);
		 return  updateddata;
		
	}
	
		// TODO Auto-generated method stub
		
//		
		
	

	
}
