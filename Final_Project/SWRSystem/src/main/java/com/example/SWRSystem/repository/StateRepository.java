package com.example.SWRSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SWRSystem.dao.State;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {

}
