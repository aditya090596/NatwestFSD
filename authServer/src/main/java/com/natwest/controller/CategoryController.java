package com.natwest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.exception.ResourceNotFound;
import com.natwest.model.Category;
import com.natwest.payload.Categorydto;
import com.natwest.service.ICategoryService;

@RestController

@RequestMapping("/api")
public class CategoryController {
	@Autowired
	private ICategoryService catservice;
	
	@PostMapping("/category")
	public ResponseEntity<Categorydto> createCategory(@RequestBody Categorydto categorydto){
		 Categorydto create=this.catservice.createCategory(categorydto);
		 return new ResponseEntity<Categorydto>(create,HttpStatus.CREATED);
		 
	}

	@PutMapping("/{catid}")
	public ResponseEntity<Categorydto> updateCategory(@RequestBody Categorydto categorydto, @PathVariable String catid) throws ResourceNotFound{
		 Categorydto updated=this.catservice.updateCategory(categorydto, catid);
		 return new ResponseEntity<Categorydto>(updated,HttpStatus.OK);
	}
	
	@DeleteMapping("/{catid}")
	public void deleteCategory( @PathVariable String catid) throws ResourceNotFound{
		
		  this.catservice.deleteCategory(catid);
	}
	@GetMapping("/getcategory/{catid}")
	public ResponseEntity<Categorydto> getCategory(@PathVariable String catid) throws ResourceNotFound{
		 Categorydto get=this.catservice.getCategory(catid);
		 return new ResponseEntity<Categorydto>(get,HttpStatus.OK);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Category>> getAllCategory() throws ResourceNotFound{
		List< Category> updated=this.catservice.getCategories();
		 return new ResponseEntity<List<Category>>(updated,HttpStatus.OK);
	}
	
}
