package com.example.SWRSystem.service;

import com.example.SWRSystem.dao.Customer;

public interface CustomerInterface {
	
	Status customerRegistration(Customer customer);
	
	Status customerUpdate(Customer customer);
}
