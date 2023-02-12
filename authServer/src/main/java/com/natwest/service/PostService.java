package com.natwest.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.exception.ResourceNotFound;
import com.natwest.model.Category;
import com.natwest.model.Employee;
import com.natwest.model.Post;
import com.natwest.repository.ICategoryRepo;
import com.natwest.repository.IEmployeeRepository;
import com.natwest.repository.IPostRepo;

@Service
public class PostService implements IPostService{
    @Autowired
	private IPostRepo postrepo;
    
    @Autowired
    private IEmployeeRepository emprepo;
    @Autowired
    private ICategoryRepo catrepo;
    
	@Override
	public Post createpost(Post pobj, String empid, String categoryid) throws ResourceNotFound {
		
//		Employee  emp=this.emprepo.findById(pobj.getEmpID()).orElseThrow(()-> new ResourceNotFound());
//		
//		Category cat=this.catrepo.findById(categoryid).orElseThrow(()-> new ResourceNotFound());
//		
//		Post post=null;
//		Post newpost=null;
//		post.setImagename("default.png");
//        post.setAdddate(new Date());	
//        post.setEmpid(emp.getEmpID());
//        post.setCategoryid(cat);
//        
//        newpost= this.postrepo.save(post);
		
		// check newsfeed 
		return null;
	}

	@Override
	public Post updatepost(Post pobj, String pid) throws ResourceNotFound {
		
		
		return null;
	}

	@Override
	public void deletepost(String pid) throws ResourceNotFound {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Post> getAllpost() throws ResourceNotFound {
		// TODO Auto-generated method stub
		return null;
	}

}
