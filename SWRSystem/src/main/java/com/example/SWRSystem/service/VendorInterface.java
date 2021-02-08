package com.example.SWRSystem.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.SWRSystem.dao.City;
import com.example.SWRSystem.dao.Vendor;

public interface VendorInterface {
	
	List<City> searchService(String serviceName);
	
	Status vendorRegistration(String vendor, MultipartFile file) throws IOException;
	
	public List<Vendor> listOfVendorFromState(String statename);
	
	public List<Vendor> listOfVendorFromStateCity(String cityname, String statename);

	public List<Vendor> listOfVendorFromStateCitySkill(String cityname, String statename, String servicename);
	
	Vendor vendorLogin(Login login);

	Vendor VendorDetailFetch(Long mobileno);
	
	Vendor vendorUpdate(Vendor ven);

	Vendor updateResetPasswordToken(String email, String token);

	Vendor updatePassword(String password, String token);

}
