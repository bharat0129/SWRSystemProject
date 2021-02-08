package com.example.SWRSystem.service;

import com.example.SWRSystem.dao.Customer;
import com.example.SWRSystem.dao.Vendor;

public class MyObject {
	
	private Customer cust;
	
	private Vendor ven;

	public MyObject() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MyObject(Customer cust, Vendor ven) {
		super();
		this.cust = cust;
		this.ven = ven;
	}

	public Customer getCust() {
		return cust;
	}

	public void setCust(Customer cust) {
		this.cust = cust;
	}

	public Vendor getVen() {
		return ven;
	}

	public void setVen(Vendor ven) {
		this.ven = ven;
	}
}
