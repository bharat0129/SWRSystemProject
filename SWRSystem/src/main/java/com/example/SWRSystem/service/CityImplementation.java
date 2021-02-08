package com.example.SWRSystem.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.City;
import com.example.SWRSystem.repository.CityRepository;

@Service
public class CityImplementation implements CityInterface{
	
	@Autowired
	private CityRepository cityrepository;
	
	static Logger l = Logger.getLogger(CityImplementation.class);

	public List<City> getCity() {
		// TODO Auto-generated method stub
		l.info("List of city is displayed");
		return cityrepository.findAll();
	}
}
