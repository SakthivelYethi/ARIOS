package com.arios.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.arios.user.entity.User;
import com.arios.user.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@GetMapping("/test")
	public String test() {
		return "USER-SERVICE";
	}
	
	@PostMapping("/")
	public User saveUser(@RequestBody User user) {
		log.info("inside saveUser {}", user.getUserName());
		return userService.saveUser(user);
	}
	
	@GetMapping("/{id}")
	public User findUserById(@RequestParam("id") Long id) {
		log.info("inside findUserById {}",id);
		User user = userService.findUserById(id);
		return user;
	}
	
	@GetMapping("/")
	public List<User> getAllUsers() {
		log.info("inside getAllUsers");
		List<User> users = userService.getAllUsers();
		return users;
	}
	
	@GetMapping("/testVO")
	public String testVO() {
		log.info("inside testVO");
		String responseFromUserService = "USER-SERVICE";
		String responseFromApplicationService = restTemplate.getForObject("http://APPLICATION-SERVICE/application/test", String.class);
				
		return "Received response from " + responseFromUserService + " " + responseFromApplicationService;
	}

}
