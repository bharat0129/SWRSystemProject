package com.example.SWRSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.SWRSystem.dao.City;
import com.example.SWRSystem.dao.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Integer> {
	
	@Query("select c from Vendor v inner join City c on v.fkcity = c.cityid inner join Skill s on v.fkskill =s.serviceid where s.servicename = :x") 
	List<City> SearchService(@Param("x") String serviceName);
	
	@Query("Select v from Vendor v where Mobile_no = :x")
	Vendor check(@Param("x") Long mobileno);
}


