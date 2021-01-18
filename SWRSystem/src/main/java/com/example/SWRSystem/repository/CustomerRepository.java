package com.example.SWRSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.SWRSystem.dao.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("Select c from Customer c where Mobile_no = :x")
	Customer check(@Param("x") Long mobileno);

	
}
