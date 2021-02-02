package com.example.SWRSystem.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.Customer;
import com.example.SWRSystem.repository.CustomerRepository;

@Service
public class CustomerImplementation implements CustomerInterface {

	private static final Logger l = LoggerFactory.getLogger(CustomerImplementation.class);
	
	@Autowired
	private CustomerRepository customerrepo;
	
	
	@Override
	public Status customerRegistration(Customer customer) {
		// TODO Auto-generated method stub
		Status s = new Status("Failed", 0);
		l.error("Customer registration Failed");
		
		
		Customer cust = customerrepo.check(customer.getMobileno());
		if(cust == null) 
		{
//		    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//		    String encodedPassword = passwordEncoder.encode(cust.getPassword());
//		    cust.setPassword(encodedPassword);
			customerrepo.save(customer);
			s.setMsg("Inserted");
			s.setStatus(1);
			l.info("Customer registraion done");
		}
		l.debug("Customer registration status is" + s);
		return s; 
	}

	@Override
	public Status customerUpdate(Customer customer) {
		// TODO Auto-generated method stub
		return null;
	}

}
