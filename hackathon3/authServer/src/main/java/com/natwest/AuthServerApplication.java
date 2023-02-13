package com.natwest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.natwest.jwtfilter.JwtFilter;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthServerApplication {

	@Bean
	public FilterRegistrationBean jwtFilter() 
	{
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new JwtFilter());
		filterRegistrationBean.addUrlPatterns("/api/v1/*");
		return filterRegistrationBean;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(AuthServerApplication.class, args);
	}

}
