package com.arios.user.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arios.user.service.entity.User;
import com.arios.user.service.entity.service.UserService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Value("${spring.application.name}")
	private String appName;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/message")
    public String test() {
        return "Hello this is "+ appName;
    }
	
	@PostMapping("/")
	public ResponseEntity<Object> saveUser(@RequestBody User user) {
		userService.saveUser(user);
		log.info("User {} created successfully!!!", user.getEmailId() );
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping("/")
    public ResponseEntity<List<User>> getUsers() {
		List<User> users = userService.getUsers();
		log.info("Found {} users!!!", users.size());
		return ResponseEntity.ok().body(users);
    }
	
	@GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
		User user = userService.getUserById(id);
		log.info("Found user : {}", user.getUserName());
		return ResponseEntity.ok().body(user);
    }

}
