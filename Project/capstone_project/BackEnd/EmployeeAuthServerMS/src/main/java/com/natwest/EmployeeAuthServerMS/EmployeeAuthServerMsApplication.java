package com.natwest.EmployeeAuthServerMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EmployeeAuthServerMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeAuthServerMsApplication.class, args);
	}

}