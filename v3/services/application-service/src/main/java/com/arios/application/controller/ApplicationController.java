package com.arios.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arios.application.entity.Application;
import com.arios.application.service.ApplicationService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/application")
@Slf4j
public class ApplicationController {
	
	@Autowired
	private ApplicationService applicationService;
	
	@GetMapping("/test")
	public String test() {
		return "APPLICATION-SERVICE";
	}

	@PostMapping("/")
	public Application saveApplication(@RequestBody Application application) {
		log.info("inside saveApplication");
		return applicationService.saveApplication(application);
	}
	
	@GetMapping("/{id}")
	public Application findByApplicationId(@RequestParam("id") Long id) {
		log.info("inside findByApplicationId");
		return applicationService.findByApplicationId(id);
	}
}
