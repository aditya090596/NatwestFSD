package com.natwest.jwtfilter;

import java.io.IOException;
import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtFilter extends GenericFilterBean{
		
	@Override
	public void doFilter(jakarta.servlet.ServletRequest request, jakarta.servlet.ServletResponse response,
			jakarta.servlet.FilterChain chain) throws IOException, jakarta.servlet.ServletException {


		HttpServletRequest httpRequest = (HttpServletRequest) request;
		
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		
		String authHeader = httpRequest.getHeader("authorization");
		
		System.out.println("AuthHeader" +  authHeader);
		
		if(authHeader == null || !authHeader.startsWith("Bearer")) 
		{
			throw new ServletException("Missing or Invalid Authentication Header");
		}
		
		String jwtToken = authHeader.substring(7);
		
		Claims claims = Jwts.parser().setSigningKey("secret key").parseClaimsJws(jwtToken).getBody();
		httpRequest.setAttribute("username", claims);
		chain.doFilter(request, response);

		
	}
}
