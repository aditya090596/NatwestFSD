package com.natwest.service;

import java.util.List;

import com.natwest.exception.ResourceNotFound;
import com.natwest.model.Post;

public interface IPostService {

	// create post
	
	Post createpost(Post pobj, String empid, String categoryid) throws ResourceNotFound ;
	
	Post updatepost (Post pobj, String pid) throws ResourceNotFound;
	
	public void  deletepost (String pid )throws ResourceNotFound ;
	
	public List<Post>  getAllpost () throws ResourceNotFound;
}
