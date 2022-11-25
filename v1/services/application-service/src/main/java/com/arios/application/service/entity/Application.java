package com.arios.application.service.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;
import lombok.ToString;

@Data
@Table(name = "TBL_APPLICATIONS")
@Entity
@ToString
public class Application {
		
	@Id
	@Column(name = "APPLICATION_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "application_seq")
	@SequenceGenerator(name="application_seq", sequenceName = "application_seq", initialValue = 100, allocationSize = 1)
	private Long id;
	
	@Column(name = "APPLICATION_NAME")
	private String applicationName;
	
	@Column(name = "DESCRIPTION")
	private String description;
	
	@Column(name = "APPLICATION_URL")
	private String applicationUrl;
	
	@Column(name = "ADAPTER")
	private String adapter;
	
	@Column(name = "BROWSER")
	private String browser;
		
	@Column(name = "PUSH_NOTIFICATION")
	private boolean pushNotification;
}
