package com.example.SWRSystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.Mail;

@Service
public class EmailServiceImplementation implements EmailServiceInterface {
	
	@Autowired
	private JavaMailSender mailSender;
	 
	String from = "ajinkyasagane19@gmail.com";

	@Override
	public Status sendEmailToVendor(Mail mail) {
		// TODO Auto-generated method stub

		Status sts = new Status("Failed", 0);
		if (mail != null) {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom(from);
			message.setTo(mail.getSentTo());
			message.setSubject("Request For Service");
			message.setText("Hello" + mail.getVendorName() +  " , \n" + mail.getCustomerName() + " Send you request on Date :- " + mail.getDate() + " \n Please Kindly Login and Check");
			mailSender.send(message);
			sts.setMsg("Success");
			sts.setStatus(1);
		}
		return sts;
	}

	@Override
	public Status sendEmailToCustomer(Mail mail) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void sendEmailforForgotPassword(String email, String Link) 
	{
		// TODO Auto-generated method stub
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom(from);
		message.setTo(email);
		message.setSubject("Link For Reset Password");
		message.setText("Hello,"
	            + "You have requested to reset your password."
	            + "Click the link below to change your password:" + Link);
		mailSender.send(message);	
	}

}
