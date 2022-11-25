package com.arios.application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name= "TBL_APPLICATION")
public class Application {
	
	@Id
	@Column	(name = "APPLICATION_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "application_seq")
	@SequenceGenerator(name="application_seq", sequenceName = "application_seq", initialValue = 1000, allocationSize = 1)
	private Long id;
	
	@Column	(name = "NAME")
	private String name;
	
	@Column	(name = "URL")
	private String url;
	
	@Column	(name = "ADAPTER")
	private String adapter;
	
	@Column	(name = "TYPE")
	private String type;
	
	@Column	(name = "ACTIVE")
	private boolean isActive; 

}
