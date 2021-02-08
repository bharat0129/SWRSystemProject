package com.example.SWRSystem.service;

import com.example.SWRSystem.dao.Customer;

public interface CustomerInterface {
	
	Status customerRegistration(Customer customer);
	
	Customer customerUpdate(Customer customer);
	
	Customer customerLogin(Login login);
	
	Customer customerDetails(Long mobileno);

	Customer updateResetPasswordToken(String email, String token);

	Customer updatePassword(String password, String token);
}
