package com.example.SWRSystem.dao;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "hire")
public class Hire 
{
	
	@Id
	@Column(name = "Request_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY  )
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "Vendor_ID")
	private Vendor vendorId;

	@ManyToOne
	@JoinColumn(name = "Customer_ID")
	private Customer customerId;
	
	@Column(name = "Hire_Date")
	private Date date;
	
	@Column(name = "Request_Time")
	private Time time;
	
	@Column(name = "Status")
	private String status;

	public Hire() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Hire(Integer id, Vendor vendorId, Customer customerId, Date date, Time time,  String status) {
		super();
		this.id = id;
		this.vendorId = vendorId;
		this.customerId = customerId;
		this.date = date;
		this.time = time;
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Vendor getVendorId() {
		return vendorId;
	}

	public void setVendorId(Vendor vendorId) {
		this.vendorId = vendorId;
	}

	public Customer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Customer customerId) {
		this.customerId = customerId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}