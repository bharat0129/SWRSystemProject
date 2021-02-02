package com.example.SWRSystem.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.City;
import com.example.SWRSystem.repository.CityRepository;

@Service
public class CityImplementation implements CityInterface{

	private static final Logger l = LoggerFactory.getLogger(CityImplementation.class);
	
	@Autowired
	private CityRepository cityrepository;

	public List<City> getCity() {
		// TODO Auto-generated method stub
		l.info("List of city is displayed");
		return cityrepository.findAll();
	}
}
