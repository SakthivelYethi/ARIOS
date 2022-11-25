package com.arios.application.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arios.application.service.entity.Application;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

}
