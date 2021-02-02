package com.example.SWRSystem.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import com.example.SWRSystem.dao.City;
import com.example.SWRSystem.dao.Vendor;
import com.example.SWRSystem.repository.VendorRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class VendorImplementation implements VendorInterface {

	@Autowired
	private VendorRepository vendorrepo;

	static Logger l = Logger.getLogger(VendorImplementation.class);

	/* -- Show List Of City For Particular Service -- */
	@Override
	public List<City> searchService(String serviceName) {
		// TODO Auto-generated method stub
		l.info("Service is searched");
		return vendorrepo.SearchService(serviceName);
	}

	/* -- JSON to object Converter -- */
	private static Vendor convertToObject(String vendor) throws JsonMappingException, JsonProcessingException {
		// TODO Auto-generated method stub
		ObjectMapper objmap = new ObjectMapper();
		Vendor ven = objmap.readValue(vendor, Vendor.class);
		return ven;
	}

	/* -- Save File to Local Directory Function -- */
	private static void saveFile(String uploadDir, String fileName, MultipartFile file) throws IOException {
		// TODO Auto-generated method stub
		Path uploadPath = Paths.get(uploadDir);
		if (!Files.exists(uploadPath)) {
			Files.createDirectories(uploadPath);
		}
		try (InputStream inputStream = file.getInputStream()) {
			Path filePath = uploadPath.resolve(fileName);
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException ioe) {
			l.warn("ioexception", ioe);
			throw new IOException("Could not save image file: " + fileName, ioe);
		}
	}

	@Override
	public Status vendorRegistration(String vendor, MultipartFile file) throws IOException {
		// TODO Auto-generated method stub
		Status sts = new Status("Failed", 0);
		l.error("Vendor Registration Failed");

		try {
			Vendor ven = convertToObject(vendor);
			Vendor vensave = vendorrepo.check(ven.getMobileno());
			if (vensave == null) {
				String fileName = StringUtils.cleanPath(file.getOriginalFilename());
				ven.setImage(fileName);
				String uploadDir = "user-photos/" + ven.getMobileno();
				VendorImplementation.saveFile(uploadDir, fileName, file);
				vendorrepo.save(ven);
				sts.setMsg("Inseted");
				sts.setStatus(1);

				l.info("Vendor registraion done");
			}
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			l.warn("Warning", e);
		}

		l.debug("Vendor registration status is" + sts);
		return sts;
	}

	/* -- Show List Of Vendor From Particular State -- */
	@Override
	public List<Vendor> listOfVendorFromState(String statename) {
		// TODO Auto-generated method stub
		return vendorrepo.listOfVendorFromState(statename);
	}

	/* -- Show List Of Vendor From Particular State and City -- */
	@Override
	public List<Vendor> listOfVendorFromStateCity(String statename, String cityname) {
		// TODO Auto-generated method stub
		return vendorrepo.listOfVendorFromStateCity(statename, cityname);
	}

	/* -- Show List Of Vendor From Particular State, City and Skill -- */
	@Override
	public List<Vendor> listOfVendorFromStateCitySkill(String statename, String cityname, String servicename) {
		// TODO Auto-generated method stub
		return vendorrepo.listOfVendorFromStateCitySkill(statename, cityname, servicename);
	}

	@Override
	public Vendor vendorLogin(Login login)
	{
		// TODO Auto-generated method stub
		Vendor vendor = new Vendor();
		if(vendorrepo.check(login.getMobileno()) != null) 
		{
			Vendor ven = vendorrepo.check(login.getMobileno());
			if(login.getPassword().equalsIgnoreCase(ven.getPassword()))
			{
				l.info("Vendor Login done");
				return ven;
			}
		}
		l.debug("Customer Login failed");
		return vendor;
	}

	@Override
	public Vendor VendorDetailFetch(Long mobileno) {
		// TODO Auto-generated method stub
		Status s = new Status("Vendor Deatils Not Found", 0);
		l.error("Vendor Login Failed");

		Vendor vendor = vendorrepo.check(mobileno);
		if (vendor != null) {
			s.setMsg("Vendor Deatils Found");
			s.setStatus(1);
			l.info("Vendor Deatils Fetch");
		}
		l.debug("Vendor Deatils Fetch status is" + s);
		return vendor;
	}

	@Override
	public Vendor vendorUpdate(Vendor ven) {
		// TODO Auto-generated method stub
		Vendor vendor = vendorrepo.check(ven.getMobileno());
		if (vendor != null) {
			l.debug("Vendor Details Found");
			vendorrepo.save(vendor);
			l.debug("Vendor Update Successfully");
		}
		l.debug("Vendor Details Not Found");
		return vendor;
	}

	@Override
	public Vendor updateResetPasswordToken(String email, String token) {
		// TODO Auto-generated method stub
		Vendor ven = vendorrepo.checkemail(email);
		if(ven != null)
		{
			ven.setResetPassToken(token);
			vendorrepo.save(ven);
		}
		return ven;
	}

	@Override
	public Vendor updatePassword(String password, String token) {
		// TODO Auto-generated method stub
		Vendor ven = vendorrepo.findBytoken(token);
		if(ven != null) 
		{
			ven.setPassword(password);
			ven.setResetPassToken(null);
			vendorrepo.save(ven);
		}
		return ven;
	}
}
