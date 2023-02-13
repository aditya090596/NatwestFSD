package com.restapi_custauth_Repository;




import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



import com.restapi_custauth_model.customerdetails;


@Repository
public interface Irepository  extends JpaRepository<customerdetails, String>{

//	@Query 
//	Optional<customer_details> findByemail(String email);
	
	@Query(value="select * from user u where u.email like %:param1%", nativeQuery=true)
	Optional<customerdetails> findByemail(@Param("param1") String email);
	
}
