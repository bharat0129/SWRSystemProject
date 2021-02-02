package com.example.SWRSystem.service;

import java.util.List;

import com.example.SWRSystem.dao.Hire;
import com.example.SWRSystem.dao.Vendor;

public interface HireInterface {
	
	Status hireVendor(Hire hire);

	List<Hire> hireVendorDetailFetch(Vendor vendor);

	Status acceptRequest(Integer id);

	Status rejectRequest(Integer id);

}
