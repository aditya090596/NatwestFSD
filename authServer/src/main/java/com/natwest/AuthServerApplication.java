package com.natwest;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthServerApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(AuthServerApplication.class, args);
	}
@Bean
	public ModelMapper modelmapper() {
return new ModelMapper();
}
}