package com.example.SWRSystem.dao;

import java.util.Date;

public class Mail {
	
	private String sentTo;
	
	private String customerName;
	
	private String vendorName;
	
	private Date date;
	
	public Mail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mail(String sentTo, String customerName, String vendorName, Date date) {
		super();
		this.sentTo = sentTo;
		this.customerName = customerName;
		this.vendorName = vendorName;
		this.date = date;
	}

	public String getSentTo() {
		return sentTo;
	}

	public void setSentTo(String sentTo) {
		this.sentTo = sentTo;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
