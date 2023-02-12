package com.natwest.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.natwest.exception.ResourceNotFound;
import com.natwest.model.Category;
import com.natwest.payload.Categorydto;
import com.natwest.repository.ICategoryRepo;

@Service
public class CategoryService implements ICategoryService{
	@Autowired
	private ICategoryRepo categoryrepo;
	
	@Autowired
	private ModelMapper modelmapper;

	@Override
	public Categorydto createCategory(Categorydto categorydto) {
		Category cat= this.modelmapper.map(categorydto, Category.class);
		
		Category addedcat= this.categoryrepo.save(cat);
		return this.modelmapper.map(addedcat, Categorydto.class);
	}

	@Override
	public Categorydto updateCategory(Categorydto categorydto, String categoryid) throws ResourceNotFound {
		
		Category cat=this.categoryrepo.findById(categoryid)
				.orElseThrow(() -> new ResourceNotFound());
		cat.setCategorytitle(categorydto.getCategorytitle());
		cat.setCategorydescription(categorydto.getCategorydescription());
		
		Category updatecat=this.categoryrepo.save(cat);
		
		return this.modelmapper.map(updatecat, Categorydto.class);
	}

	@Override
	public void deleteCategory(String categoryid) throws ResourceNotFound {
		
		Category cat=this.categoryrepo.findById(categoryid).orElseThrow(()-> new ResourceNotFound());
		this.categoryrepo.delete(cat);
		
	}

	@Override
	public Categorydto getCategory(String categoryid) throws ResourceNotFound {
		
		Category cat=this.categoryrepo.findById(categoryid).orElseThrow(()-> new ResourceNotFound());
		
		Category getcat=this.modelmapper.map(cat, Category.class);
		Category getcategory= this.categoryrepo.save(getcat);
		return this.modelmapper.map(getcategory, Categorydto.class);
	}

	@Override
	public List<Category> getCategories() {
		List<Category>cat= this.categoryrepo.findAll();
		//List<Categorydto> catdto=cat.stream().map((category)-> this.modelmapper.map(cat, Categorydto.class)).collect(Collectors.toList());
		
		
		// if (sta.isEmpty()) {
//		throw new NoComplaintsFound ();
//	}
//	else {
//		return sta;
//	}
		return cat;
	}

}
