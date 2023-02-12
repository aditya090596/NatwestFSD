package com.natwest.service;

import java.util.List;

import com.natwest.exception.ResourceNotFound;
import com.natwest.model.Category;
import com.natwest.payload.Categorydto;

public interface ICategoryService {

	public Categorydto createCategory(Categorydto categorydto);
	public Categorydto updateCategory(Categorydto categorydto, String categoryid) throws ResourceNotFound;
	public void  deleteCategory(String categoryid) throws ResourceNotFound;
	public Categorydto  getCategory(String categoryid) throws ResourceNotFound;
	public List<Category> getCategories();
	
}
