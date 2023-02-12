package com.natwest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.natwest.model.Category;
import com.natwest.model.Employee;
import com.natwest.model.Post;

@Repository
public interface IPostRepo extends JpaRepository <Post, String> {

	
	@Query(value="select * from post u where u.empid like :Param", nativeQuery=true)
	List <Employee> findByEmployee (@Param("Param") Employee empid);
	
	@Query(value="select * from post u where u.categoryid like :Param", nativeQuery=true)
	List <Category> findByCategory ( @Param("Param") Category categoryid);
}
