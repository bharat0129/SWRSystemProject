package com.example.SWRSystem.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.State;
import com.example.SWRSystem.repository.StateRepository;

@Service
public class StateImplementation implements StateInterface {
	
	static Logger l = Logger.getLogger(StateImplementation.class);
	
	@Autowired
	private StateRepository staterepository;
	
	public List<State> getState() {
		// TODO Auto-generated method stub
		l.info("List of state is displayed");
		return staterepository.findAll();
	}

}
