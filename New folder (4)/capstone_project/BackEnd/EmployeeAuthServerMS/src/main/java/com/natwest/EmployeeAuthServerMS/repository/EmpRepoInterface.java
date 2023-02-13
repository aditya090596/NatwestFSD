package com.natwest.EmployeeAuthServerMS.repository;

import com.natwest.EmployeeAuthServerMS.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpRepoInterface extends JpaRepository<Employee, String>{
	
	// This query will check if the email address is already stored in the database.
	
	@Query(value="select * from employee emp where emp.email like :emailParam", nativeQuery=true)
	Employee findByEmail(@Param("emailParam") String email);

	@Query(value="select * from employee emp where emp.empID like :empId", nativeQuery=true)
	Employee findByEmpID(@Param("empId") String empId);

}