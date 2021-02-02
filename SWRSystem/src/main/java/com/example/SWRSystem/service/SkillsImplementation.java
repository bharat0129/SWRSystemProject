package com.example.SWRSystem.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.Skill;
import com.example.SWRSystem.repository.SkillsRepository;

@Service
public class SkillsImplementation implements SkillsInterface {
	
	private static final Logger l = LoggerFactory.getLogger(SkillsImplementation.class);
	
	@Autowired
	private SkillsRepository skillsrepository;

	public List<Skill> getSkill() {
		// TODO Auto-generated method stub
		l.info("List of skill is displayed");
		return skillsrepository.findAll();
	}
	
	
	
	
	

}
