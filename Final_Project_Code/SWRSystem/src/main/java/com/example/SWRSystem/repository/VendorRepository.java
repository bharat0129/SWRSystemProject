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
	
	@Query("Select v from Vendor v where v.mobileno = :x")
	Vendor check(@Param("x") Long mobileno);
	
	@Query("select v from Vendor v where v.fkstate IN (Select s.id from State s where s.statename = :a)")
	List<Vendor> listOfVendorFromState(@Param("a") String statename);
	
	@Query("select v from Vendor v where v.fkstate IN (Select s.id from State s where s.statename = :a) and v.fkcity IN (Select c.cityid from City c where c.cityname = :b ) ")
	List<Vendor> listOfVendorFromStateCity(@Param("a") String statename, @Param("b") String cityname);
	
	@Query("select v from Vendor v where v.fkstate IN (Select s.id from State s where s.statename = :a) and v.fkcity IN (Select c.cityid from City c where c.cityname = :b) and v.fkskill IN (select s.serviceid from Skill s where s.servicename = :c) ")
	List<Vendor> listOfVendorFromStateCitySkill(@Param("a") String statename, @Param("b") String cityname, @Param("c") String servicename);
	
	@Query("Select v from Vendor v where v.email = :x")
	Vendor checkemail(@Param("x") String email);
	
	@Query("Select v from Vendor v where v.resetPassToken = :x")
	Vendor findBytoken(@Param("x") String token);
}

