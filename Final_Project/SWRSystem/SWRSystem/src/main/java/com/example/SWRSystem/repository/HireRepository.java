package com.example.SWRSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.SWRSystem.dao.Hire;

@Repository
public interface HireRepository extends JpaRepository<Hire, Integer> {

	@Query("select h from Hire h where h.vendorId IN (Select v.vendorid from Vendor v where v.vendorid = :x)")
	List<Hire> check(@Param("x") Integer vendor);
	
	
	@Query("select h from Hire h where h.id = :x")
	Hire checkById(@Param("x") Integer id);

}

