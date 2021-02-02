package com.example.SWRSystem.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.State;
import com.example.SWRSystem.repository.StateRepository;

@Service
public class StateImplementation implements StateInterface {
	
	private static final Logger l = LoggerFactory.getLogger(StateImplementation.class);
	
	@Autowired
	private StateRepository staterepository;
	
	public List<State> getState() {
		// TODO Auto-generated method stub
		l.info("List of state is displayed");
		return staterepository.findAll();
	}

}
