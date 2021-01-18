package com.example.SWRSystem.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.SWRSystem.dao.City;

public interface VendorInterface {
	
	List<City> SearchService(String serviceName);
	
	Status vendorRegistration(String vendor, MultipartFile file) throws IOException;
}
