package com.restapidemo2.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "Course")
public class Course {

	public Course(int id, String title, String coursename) {
		super();
		this.id = id;
		this.title = title;
		this.coursename = coursename;
	}
	
	public Course() {
		super();
	}

	@Id
	private int id;
	private String title;
	private String coursename;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", coursename=" + coursename + "]";
	}
	
}
