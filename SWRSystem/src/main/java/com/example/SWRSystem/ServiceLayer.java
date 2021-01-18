package com.example.SWRSystem;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.SWRSystem.dao.City;
import com.example.SWRSystem.dao.Customer;
import com.example.SWRSystem.dao.Skill;
import com.example.SWRSystem.dao.State;
import com.example.SWRSystem.service.CityImplementation;
import com.example.SWRSystem.service.CustomerImplementation;
import com.example.SWRSystem.service.SkillsImplementation;
import com.example.SWRSystem.service.StateImplementation;
import com.example.SWRSystem.service.Status;
import com.example.SWRSystem.service.VendorImplementation;

@CrossOrigin(origins = "*")
@RestController
public class ServiceLayer {
	
	@Autowired
	private VendorImplementation venimplementation;
	
	@Autowired
	private CustomerImplementation custimplementation;
	
	@Autowired
	private StateImplementation staimplementation;
	
	@Autowired
	private CityImplementation cityimplementation;
	
	@Autowired
	private SkillsImplementation skillimplementation;
	
	/* -- Home Page Search Service -- */
	@GetMapping("/service")
	public List<City> searchService(@RequestParam("x") String serviceName)
	{
		return venimplementation.SearchService(serviceName);
	}
	
	/* -- Customer Registration Page -- */
	@PostMapping("/customerRegistration")
	public Status customerRegistration(@RequestBody Customer cust)
	{
		return custimplementation.customerRegistration(cust);
	}
	
	/* -- Service Registration Page -- */
	@PostMapping(value = "/vendorRegistration", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
	public Status vendorRegistration(@RequestPart("vendor") String vendor, @RequestParam("file") MultipartFile file) throws IOException 
	{
		return venimplementation.vendorRegistration(vendor, file);
	}
	
	/* -- List Of State -- */
	@GetMapping("/listOfState")
	public List<State> getState()
	{
		return staimplementation.getState();
	}
	
	/* -- List Of City -- */
	@GetMapping("/listOfCity")
	public List<City> getCity()
	{
		return cityimplementation.getCity();
	}
	
	/* -- List Of Skill -- */
	@GetMapping("/listOfSkill")
	public List<Skill> getSkill()
	{
		return skillimplementation.getSkill();
	}
}