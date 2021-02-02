package com.example.SWRSystem;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SwrSystemApplication {

	private static final Logger l = LoggerFactory.getLogger(SwrSystemApplication.class);
	
	
	public static void main(String[] args) {
		SpringApplication.run(SwrSystemApplication.class, args);
	
		l.error("Message logged at ERROR level");
		l.warn("Message logged at WARN level");
		l.info("Message logged at INFO level");
		l.debug("Message logged at DEBUG level");
	}

}
