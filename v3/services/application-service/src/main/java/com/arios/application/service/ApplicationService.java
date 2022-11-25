package com.arios.application.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arios.application.entity.Application;
import com.arios.application.repository.ApplicationRepository;

@Service
public class ApplicationService {
	
	@Autowired
	private ApplicationRepository applicationRepository;

	public Application saveApplication(Application application) {
		applicationRepository.save(application);
		return application;
	}

	public Application findByApplicationId(Long id) {
		Optional<Application> application = applicationRepository.findById(id);
		if(application.isPresent()) {
			return application.get();
		} else {
			return null;
		}
	}

}
