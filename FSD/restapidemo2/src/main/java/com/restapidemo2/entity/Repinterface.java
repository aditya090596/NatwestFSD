package com.restapidemo2.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface Repinterface extends JpaRepository<Course,Integer>{

}
