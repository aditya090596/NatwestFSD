package com.natwest.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.natwest.model.Customer;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, String>{
	
	// This query will check if the email address is already stored in the database.
	
	@Query(value="select * from user u where u.email like %:emailParam%", nativeQuery=true)
	Optional<Customer> findByEmail(@Param("emailParam") String email);

	@Query(value="select * from user u where u.email like %:email% and u.password like %:password%", nativeQuery=true)
	public Customer validateUser(@Param("email") String email, @Param("password") String password);
}
