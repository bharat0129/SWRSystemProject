package com.example.SWRSystem.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.Skill;
import com.example.SWRSystem.repository.SkillsRepository;

@Service
public class SkillsImplementation implements SkillsInterface {
	
	static Logger l = Logger.getLogger(SkillsImplementation.class);
	
	@Autowired
	private SkillsRepository skillsrepository;

	public List<Skill> getSkill() {
		// TODO Auto-generated method stub
		l.info("List of skill is displayed");
		return skillsrepository.findAll();
	}
	
	
	
	
	

}
