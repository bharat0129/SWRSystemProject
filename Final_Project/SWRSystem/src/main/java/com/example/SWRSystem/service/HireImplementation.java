package com.example.SWRSystem.service;

import java.sql.Time;
import java.time.LocalTime;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SWRSystem.dao.Hire;
import com.example.SWRSystem.dao.Vendor;
import com.example.SWRSystem.repository.HireRepository;

@Service
public class HireImplementation implements HireInterface {
	
	@Autowired
	HireRepository hirerepo;
	
	static Logger l = Logger.getLogger(HireImplementation.class);
	
	@Override
	public Status hireVendor(Hire hire) {
		// TODO Auto-generated method stub
		hire.setTime(Time.valueOf(LocalTime.now()));
		Status sts = new Status("Insert", 1);
		hirerepo.save(hire);
		return sts;
	}

	@Override
	public List<Hire> hireVendorDetailFetch(Vendor vendor) {
		// TODO Auto-generated method stub
		Status s = new Status("Vendor Deatils Not Found", 0);
		l.error("Vendor Login Failed");
		System.out.println(vendor.getVendorid());
		List<Hire> hire = hirerepo.check(vendor.getVendorid());
		if(hire != null) 
		{
				s.setMsg("Vendor Deatils Found");
				s.setStatus(1);
				l.info("Vendor Deatils Fetch");
		}
		l.debug("Vendor Deatils Fetch status is" + s);
		return hire; 	
	}

	@Override
	public Status acceptRequest(Integer id) {
		// TODO Auto-generated method stub
		Status sts = new Status("Reject", 0);
		Hire hire = hirerepo.checkById(id);
		if(hire != null) 
		{
			hire.setStatus("Accept");
			hirerepo.save(hire);
			sts.setMsg("Accept");
			sts.setStatus(1);
		}
		return sts;
	}

	@Override
	public Status rejectRequest(Integer id) {
		// TODO Auto-generated method stub
		Status sts = new Status("Update Failed", 0);
		Hire hire = hirerepo.checkById(id);
		if(hire != null) 
		{
			hire.setStatus("Reject");
			hirerepo.save(hire);
			sts.setMsg("Update Successfully");
			sts.setStatus(1);
		}
		return sts;
	}
}
