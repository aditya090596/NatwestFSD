package com.natwest.complaints.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.natwest.complaints.entity.Complaint;

@Repository
public interface ComplaintRepositoryInterface extends JpaRepository <Complaint, String>{

	@Query(value="select * from complaint u where u.raisedBy like :Param", nativeQuery=true)
	public List<Complaint> raisedBy(@Param("Param") String custId);
	
	@Query(value="select * from complaint u where u.status like :Param", nativeQuery=true)
	public List<Complaint> findByStatus(@Param("Param") String status );

	@Query(value="select * from complaint u where u.compID like :Param", nativeQuery=true)
	public  Optional<Complaint> addComments(@Param("Param") String compID );
	
}