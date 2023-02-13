package com.restapi_custauth_Repository;



//import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.restapi_custauth_model.Customer;

@Repository
public interface ICustRepository extends JpaRepository<Customer, String> {

	Optional<Customer> findByemail(String email);
//	@Query ("Select u from user u where u.name=:n")
//private Optional<Customer>findByName(@Param("n") String Name);
}
