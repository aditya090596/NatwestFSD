package com.natwest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.natwest.model.Employee;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, String>{
	
	// This query will check if the email address is already stored in the database.
	
	@Query(value="select * from employee u where u.email like %:emailParam%", nativeQuery=true)
	Employee findByEmail(@Param("emailParam") String email);

//	@Query(value="select * from employee u where u.email = :email and u.password = :password", nativeQuery=true)
//	public Employee validateemployee(@Param("email") String email, @Param("password") String password);
}


