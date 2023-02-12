package com.natwest.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="post")
public class Post {

    @Id	
	private String postid;
	private String title;
	
	@Column(length=10000, nullable=false)
	private String content;
	private String imagename;
	private Date adddate;
	private String empID;
	
	public Post() {
		super();
	}

	public String getPostid() {
		return postid;
	}

	public void setPostid(String postid) {
		this.postid = postid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImagename() {
		return imagename;
	}

	public void setImagename(String imagename) {
		this.imagename = imagename;
	}

	public Date getAdddate() {
		return adddate;
	}

	public void setAdddate(Date adddate) {
		this.adddate = adddate;
	}

	public String getEmpID() {
		return empID;
	}

	public void setEmpID(String empID) {
		this.empID = empID;
	}

	public Category getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(Category categoryid) {
		this.categoryid = categoryid;
	}

	public Employee getEmpid() {
		return empid;
	}

	public void setEmpid(Employee empid) {
		this.empid = empid;
	}

	@ManyToOne
	private Category categoryid;
	
	@ManyToOne
	private Employee empid;

	@Override
	public String toString() {
		return "Post [postid=" + postid + ", title=" + title + ", content=" + content + ", imagename=" + imagename
				+ ", adddate=" + adddate + ", empID=" + empID + ", categoryid=" + categoryid + ", empid=" + empid + "]";
	}
	
	
}
