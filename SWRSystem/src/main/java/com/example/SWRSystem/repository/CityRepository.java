package com.example.SWRSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SWRSystem.dao.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

}
