package com.example.SWRSystem.service;

public class Login 
{
	private Long mobileno;
	
	private String password;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Login(Long mobileno, String password) {
		super();
		this.mobileno = mobileno;
		this.password = password;
	}

	public Long getMobileno() {
		return mobileno;
	}

	public void setMobileno(Long mobileno) {
		this.mobileno = mobileno;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
