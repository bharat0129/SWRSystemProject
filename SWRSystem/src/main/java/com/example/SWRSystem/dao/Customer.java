package com.example.SWRSystem.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@Column(name = "Customer_Id")
	@GeneratedValue(strategy = GenerationType.IDENTITY  )
	private Integer customerid;
	
	@Column(name = "Customer_Name")
	private String customername;
	
	@Column(name = "Mobile_No")
	private Long mobileno;
	
	@Column(name = "Email_Id")
	private String email;
	
	@Column(name = "Address")
	private String address;
	
	@Column(name = "City")
	private String city;
	
	@Column(name = "State")
	private String state;
	
	@Column(name = "Password")
	private String password;

	public Customer() { }

	public Customer(Integer customerid, String customername, Long mobileno, String email, String address, String city,
			String state, String password) {
		super();
		this.customerid = customerid;
		this.customername = customername;
		this.mobileno = mobileno;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.password = password;
	}

	public Integer getCustomerid() {
		return customerid;
	}

	public void setCustomerid(Integer customerid) {
		this.customerid = customerid;
	}

	public String getCustomername() {
		return customername;
	}

	public void setCustomername(String customername) {
		this.customername = customername;
	}

	public Long getMobileno() {
		return mobileno;
	}

	public void setMobileno(Long mobileno) {
		this.mobileno = mobileno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
