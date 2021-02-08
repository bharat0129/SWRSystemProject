package com.example.SWRSystem.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.Customer;
import com.example.SWRSystem.repository.CustomerRepository;

@Service
public class CustomerImplementation implements CustomerInterface {

	@Autowired
	private CustomerRepository customerrepo;
	
	static Logger l = Logger.getLogger(CustomerImplementation.class);
	
	@Override
	public Status customerRegistration(Customer customer) {
		// TODO Auto-generated method stub
		Status s = new Status("Failed", 0);
		l.error("Customer registration Failed");
			
		Customer cust = customerrepo.check(customer.getMobileno());
		if(cust == null) 
		{
			customerrepo.save(customer);
			s.setMsg("Inseted");
			s.setStatus(1);
			l.info("Customer registraion done");
		}
		l.debug("Customer registration status is" + s);
		return s; 
	}

	@Override
	public Customer customerLogin(Login login) {
		// TODO Auto-generated method stub
		Customer customer = new Customer();
		if(customerrepo.check(login.getMobileno()) != null) 
		{
			Customer cust = customerrepo.check(login.getMobileno());
			if(login.getPassword().equalsIgnoreCase(cust.getPassword()))
			{
				l.info("Customer Login done");
				return cust; 
			}
		}
		l.debug("Customer Login failed");
		return customer;
	}
	
	@Override
	public Customer customerUpdate(Customer customer) {
		// TODO Auto-generated method stub
		Customer cust = customerrepo.check(customer.getMobileno());
		if(cust != null) 
		{
			l.debug("Customer Details Found");
			customerrepo.save(customer);
			l.debug("Customer Update Successfully");
		}
		l.debug("Customer Details Not Found");
		return customer; 
	}

	@Override
	public Customer customerDetails(Long mobileno) {
		// TODO Auto-generated method stub
		Customer customer = customerrepo.check(mobileno);
		if(customer != null) 
		{
			l.debug("Customer Details Found");
			return customer;
		}
		l.debug("Customer Details Not Found");
		return customer; 
	}

	@Override
	public Customer updateResetPasswordToken(String email, String token) {
		// TODO Auto-generated method stub
		Customer cust = customerrepo.checkemail(email);
		if(cust != null)
		{
			
			cust.setResetPasswordToken(token);
			customerrepo.save(cust);
		}
		return cust;
	}

	@Override
	public Customer updatePassword(String password, String token) {
		// TODO Auto-generated method stub
		Customer cust = customerrepo.findBytoken(token);
		if(cust != null) 
		{
			cust.setPassword(password);
			cust.setResetPasswordToken(null);
			customerrepo.save(cust);
		}
		return cust;
	}
}