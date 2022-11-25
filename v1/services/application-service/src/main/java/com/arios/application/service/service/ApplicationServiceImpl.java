package com.arios.application.service.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arios.application.service.entity.Application;
import com.arios.application.service.repository.ApplicationRepository;

@Service
public class ApplicationServiceImpl implements ApplicationService {

	@Autowired
	private ApplicationRepository applicationRepository;
	
	
	@Override
	public Application saveApplication(Application application) {
		application = applicationRepository.save(application);
		return application;
	}


	@Override
	public List<Application> getApplications() {
		List<Application> applications = applicationRepository.findAll();
		return applications;
	}


	@Override
	public Application getApplicationById(Long id) {
		Application application = applicationRepository.findById(id).get();
		return application;
	}

}
