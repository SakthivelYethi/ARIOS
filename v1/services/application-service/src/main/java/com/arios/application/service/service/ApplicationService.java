package com.arios.application.service.service;

import java.util.List;

import com.arios.application.service.entity.Application;

public interface ApplicationService {

	Application saveApplication(Application user);

	List<Application> getApplications();

	Application getApplicationById(Long id);

}
