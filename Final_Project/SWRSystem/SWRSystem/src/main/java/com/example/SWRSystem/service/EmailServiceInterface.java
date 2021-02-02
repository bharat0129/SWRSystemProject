package com.example.SWRSystem.service;

import com.example.SWRSystem.dao.Mail;

public interface EmailServiceInterface {
	
	public Status sendEmailToVendor(Mail mail);
	
	public Status sendEmailToCustomer(Mail mail);

	public void sendEmailforForgotPassword(String email, String resetPasswordLink);

}
