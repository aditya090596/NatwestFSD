package com.boot.swag.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.swag.model.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api")
@RestController
public class Swagger3RestController {

	List<User> users = new ArrayList<User>();
	{
		users.add(new User(1,"User1", "ADMIN", "user1@test.com"));
		users.add(new User(2,"User2", "SUPERVISOR", "user2@test.com"));
		users.add(new User(3,"User3", "USER", "user3@test.com"));
		users.add(new User(4,"User4", "USER", "user4@test.com"));
	}


	@GetMapping("/getUsers")
//	@RequestMapping(value = "/getUsers", method = RequestMethod.GET, produces = "application/json")
	public List<User> getUsers() {
		return users;
	}

	@RequestMapping(value = "/getUser/{id}", method = RequestMethod.GET, produces = "application/json")
	public User getUserById(@PathVariable(value = "id") int id) {
		return users.stream().filter(x -> x.getId()==(id)).collect(Collectors.toList()).get(0);
	}

	@RequestMapping(value = "/getUser/role/{role}", method = RequestMethod.GET, produces = "application/json")
	public List<User> getUserByRole(@PathVariable(value = "role") String role) {
		return users.stream().filter(x -> x.getRole().equalsIgnoreCase(role))
				.collect(Collectors.toList());
	}
}
