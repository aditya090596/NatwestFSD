package com.natwest.Repository;

import com.natwest.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustRepoInterface extends JpaRepository<Customer, String> {

    // This query will check if the email address is already stored in the database.

    @Query(value="select * from customer cust where cust.email like :parameter", nativeQuery=true)
    Customer findByEmail(@Param("parameter") String email);

    // This query will check if the account number is already stored in the database.

    @Query(value="select * from customer cust where cust.accountnumber like :parameter", nativeQuery=true)
    Customer findByAccount(@Param("parameter") String account);

}