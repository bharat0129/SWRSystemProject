 package com.example.SWRSystem;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
import com.example.SWRSystem.dao.Hire;
import com.example.SWRSystem.dao.Mail;
import com.example.SWRSystem.dao.Skill;
import com.example.SWRSystem.dao.State;
import com.example.SWRSystem.dao.Vendor;

import com.example.SWRSystem.service.CityInterface;
import com.example.SWRSystem.service.CustomerInterface;
import com.example.SWRSystem.service.EmailServiceInterface;
import com.example.SWRSystem.service.HireInterface;
import com.example.SWRSystem.service.Login;
import com.example.SWRSystem.service.MyObject;
import com.example.SWRSystem.service.SkillsInterface;
import com.example.SWRSystem.service.StateInterface;
import com.example.SWRSystem.service.Status;
import com.example.SWRSystem.service.VendorInterface;

import net.bytebuddy.utility.RandomString;

@CrossOrigin(origins = "*")
@RestController
public class ServiceLayer {
		
	@Autowired
	private VendorInterface veninterface;
	
	@Autowired
	private CustomerInterface custinterface;
	
	@Autowired
	private StateInterface stateinterface;
	
	@Autowired
	private CityInterface cityinterface;
	
	@Autowired
	private SkillsInterface skillinterface;
	
	@Autowired
	private HireInterface hireinterface;
	
	@Autowired
	private EmailServiceInterface emailserviceinterface;
	
	/* -- Home Page Search Service -- */
	@GetMapping("/service")
	public List<City> searchService(@RequestParam("x") String serviceName)
	{
		return veninterface.searchService(serviceName);
	}
	
	/* -- Customer Registration Page -- */
	@PostMapping("/customerRegistration")
	public Status customerRegistration(@RequestBody Customer cust)
	{
		return custinterface.customerRegistration(cust);
	}
	
	/* -- List Of State -- */
	@GetMapping("/listOfState")
	public List<State> getState()
	{
		return stateinterface.getState();
	}
	
	/* -- List Of City -- */
	@GetMapping("/listOfCity")
	public List<City> getCity()
	{
		return cityinterface.getCity();
	}
	
	/* -- List Of Skill -- */
	@GetMapping("/listOfSkill")
	public List<Skill> getSkill()
	{
		return skillinterface.getSkill();
	}
	
	/* -- Vendor Registration Page -- */
	@PostMapping(value = "/vendorRegistration", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
	public Status vendorRegistration(@RequestPart("vendor") String vendor, @RequestParam("file") MultipartFile file) throws IOException 
	{
		return veninterface.vendorRegistration(vendor, file);
	}
	
	/* -- Login Page -- */
	@PostMapping("/loginpage")
	public MyObject Login(@RequestBody Login login)
	{
		MyObject myobject = new MyObject();
		
		Customer cust = custinterface.customerLogin(login);
	
		Vendor ven = veninterface.vendorLogin(login);
		
		myobject.setCust(cust);
		myobject.setVen(ven);	
		return myobject;
	}
	
	/* -- It will give list of vendors from selected State -- */
	@GetMapping("/vendorlistfromstate")
	public List<Vendor> listOfVendorFromState(@RequestParam("a") String statename)
	{
		//System.out.println(statename);
		return veninterface.listOfVendorFromState(statename);
	}
	
	/* -- It will give list of vendors from selected State and City -- */
	@GetMapping("/vendorlistfromstatecity")
	public List<Vendor> listOfVendorFromStateCity(@RequestParam("a") String statename, @RequestParam("b") String cityname)
	{
		return veninterface.listOfVendorFromStateCity(statename, cityname );
	}
	
	/* -- It will give list of vendors from selected State, City and Skill-- */
	@GetMapping("/vendorlistfromstatecityskill")
	public List<Vendor> listOfVendorFromStateCitySkill(@RequestParam("a") String statename, @RequestParam("b") String cityname, @RequestParam("c") String servicename)
	{
		return veninterface.listOfVendorFromStateCitySkill(statename, cityname, servicename);
	}
	
	/* -- Update Page -- */
	@GetMapping("/GetDeatilsBasedOnMobileno")
	public MyObject getDeatilsOfUser(@RequestParam("x") Long Mobile)
	{
		MyObject myobj = new MyObject();
		Customer cust = custinterface.customerDetails(Mobile);
		Vendor ven = veninterface.VendorDetailFetch(Mobile);
		if(cust != null) 
			myobj.setCust(cust);
		else if(ven != null) 
			myobj.setVen(ven);
		return myobj;
	}
	
	@GetMapping("/CustomerDeatilsFetch")
	public Customer CustomerDetailsFetch(@RequestParam("x") Long mobileno)
	{
		return custinterface.customerDetails(mobileno);
	}
	
	@PostMapping("/UpdateCustomer")
	public Customer customerUpdate(@RequestBody Customer cust)
	{
		return custinterface.customerUpdate(cust);
	}
	
	@GetMapping("/VendorDeatilsFetch")
	public Vendor VendorDetailFetch(@RequestParam("x") Long mobileno)
	{
		return veninterface.VendorDetailFetch(mobileno);
	}
	
	@PostMapping("/UpdateVendor")
	public Vendor vendorUpdate(@RequestBody Vendor ven)
	{
		return veninterface.vendorUpdate(ven);
	}
	
	
	/* -- Hire Page -- */
	@PostMapping("/RequestForHire")
	public Status HireVendor(@RequestBody Hire hire) 
	{
		return hireinterface.hireVendor(hire);
	}
	
	@PostMapping("/HireVendorDeatilsFetch")
	public List<Hire> HireVendorDetailFetch(@RequestBody Vendor vendor)
	{
		return hireinterface.hireVendorDetailFetch(vendor);
	}
	
	@GetMapping("/AcceptRequestForCustomer")
	public Status AcceptRequest(@RequestParam("x") Integer id)
	{
		return hireinterface.acceptRequest(id);
	}
	
	@GetMapping("/RejectRequestForCustomer")
	public Status RejectRequest(@RequestParam("x") Integer id)
	{
		return hireinterface.rejectRequest(id);
	}
	
	/* -- Mail Sent to Vendor -- */
	@PostMapping("/SendMailToVendor")
	public Status sendEmailToVendor(@RequestBody Mail mail)
	{
		return emailserviceinterface.sendEmailToVendor(mail);
	}
	
	/* -- Forgot Password -- */
	@GetMapping("/Forgotpassword")
	public Status forgotPassword(HttpServletRequest request, @RequestParam("x") String email) 
	{
		Status sts = new Status("Failed",0);
		
		String token = RandomString.make(30);
		
		Customer cust = custinterface.updateResetPasswordToken(email,token);
		Vendor ven = veninterface.updateResetPasswordToken(email, token);
		
		if(cust != null || ven != null)
		{
			String resetPasswordLink = "http://localhost:4200/app-reset-password?token=" + token;
		    emailserviceinterface.sendEmailforForgotPassword(email, resetPasswordLink);
			
			sts.setMsg("Done");
			sts.setStatus(1);
		}
		 return sts;
	}
	
	@GetMapping("/reset_password")
	public Status resetpassword(@RequestParam("x") String password,@RequestParam("b") String token) 
	{
		Status sts = new Status("Failed",0);
		Customer cust = custinterface.updatePassword(password,token);
		Vendor ven = veninterface.updatePassword(password,token);
		if(cust != null || ven != null)
		{
			sts.setMsg("Done");
			sts.setStatus(1);
		}
		 return sts;
	}
	
	
}














