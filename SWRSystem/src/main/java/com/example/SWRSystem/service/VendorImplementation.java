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

	static Logger l = Logger.getLogger(VendorImplementation.class);

	
	@Autowired
	private VendorRepository vendorrepo;

	@Override
	public List<City> SearchService(String serviceName) {
		// TODO Auto-generated method stub
		
		l.info("Service is searched");
		return vendorrepo.SearchService(serviceName);
		
	
	}

	
	/* -- JSON too object Convertor -- */
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
			
			l.error("ioexception",ioe);
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
			l.warn("Warning",e);
			
		}
	
		l.debug("Vendor registration status is" + sts);
		return sts;
	}
}
