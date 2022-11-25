package com.arios.application.service.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
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

import com.arios.application.service.entity.Application;
import com.arios.application.service.entity.dto.ApplicationDTO;
import com.arios.application.service.service.ApplicationService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
@RestController
@RequestMapping("/app")
public class ApplicationController {

	@Value("${spring.application.name}")
	private String appName;
	
	@Autowired
	private ApplicationService applicationService;
	
	@GetMapping("/message")
    public String test() {
        return "Hello this is "+ appName;
    }
	
	@PostMapping("/")
	public ResponseEntity<Object> saveApplication(@RequestBody Application application) {
		applicationService.saveApplication(application);
		log.info("Application {} created successfully!!!", application.getApplicationName() );
		return ResponseEntity.ok().body(application);
	}
	
	@GetMapping("/")
    public ResponseEntity<List<Application>> getApplications() {
		List<Application> applications = applicationService.getApplications();
		log.info("Found {} applications!!!", applications.size());
		return ResponseEntity.ok().body(applications);
    }
	
	@GetMapping("/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable("id") Long id) {
		Application application = applicationService.getApplicationById(id);
		log.info("Found applications : {}", application.getApplicationName());
		return ResponseEntity.ok().body(application);
    }
	
	@GetMapping("/dto")
    public ResponseEntity<List<ApplicationDTO>> getApplicationsDTO() {
		List<Application> applications = applicationService.getApplications();
		ModelMapper mapper = new ModelMapper();
		TypeToken<List<ApplicationDTO>> typeToken = new TypeToken<>() {};
		List<ApplicationDTO> applicationDTOs = mapper.map(applications, typeToken.getType());
		log.info("Found {} applications!!!", applicationDTOs.size());
		return ResponseEntity.ok().body(applicationDTOs);
    }
}
