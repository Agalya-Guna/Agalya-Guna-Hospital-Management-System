package com.mindtree.doctor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class MsDoctorApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsDoctorApplication.class, args);
	}

	@Bean
	@LoadBalanced
	RestTemplate restTemplate()
	{ 
		return new RestTemplate();
	}	
}
