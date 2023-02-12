package com.natwest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natwest.model.Category;

@Repository
public interface ICategoryRepo extends JpaRepository<Category , String> {

}
