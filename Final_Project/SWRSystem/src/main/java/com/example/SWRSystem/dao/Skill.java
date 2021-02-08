package com.example.SWRSystem.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "skill")
public class Skill {
	
	@Id
	@Column(name = "Service_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY  )
	public Integer serviceid;
	
	@Column(name = "Service_Name")
	private String servicename;

	public Skill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Skill(Integer serviceid, String servicename) {
		super();
		this.serviceid = serviceid;
		this.servicename = servicename;
	}

	public Integer getServiceid() {
		return serviceid;
	}

	public void setServiceid(Integer serviceid) {
		this.serviceid = serviceid;
	}

	public String getServicename() {
		return servicename;
	}

	public void setServicename(String servicename) {
		this.servicename = servicename;
	}
}
