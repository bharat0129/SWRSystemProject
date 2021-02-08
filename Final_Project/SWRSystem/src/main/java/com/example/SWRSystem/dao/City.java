package com.example.SWRSystem.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {
	
	@Id
	@Column(name = "City_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY  )
	private Integer cityid;
	
	@Column(name = "City_Name")
	private String cityname;

	@ManyToOne
	@JoinColumn(name = "State_ID")
	private State fkstate;

	public City() {
		super();
		// TODO Auto-generated constructor stub
	}

	public City(Integer cityid, String cityname, State fkstate) {
		super();
		this.cityid = cityid;
		this.cityname = cityname;
		this.fkstate = fkstate;
	}

	public Integer getCityid() {
		return cityid;
	}

	public void setCityid(Integer cityid) {
		this.cityid = cityid;
	}

	public String getCityname() {
		return cityname;
	}

	public void setCityname(String cityname) {
		this.cityname = cityname;
	}

	public State getFkstate() {
		return fkstate;
	}

	public void setFkstate(State fkstate) {
		this.fkstate = fkstate;
	}
}
