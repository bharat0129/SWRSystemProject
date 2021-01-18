package com.example.SWRSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SWRSystem.dao.Skill;

@Repository
public interface SkillsRepository extends JpaRepository<Skill, Integer> {
	
}
