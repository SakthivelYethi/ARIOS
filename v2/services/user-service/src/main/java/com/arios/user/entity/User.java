package com.arios.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "TBL_USERS")
@Data
public class User {
	
	
	@Id
	@Column	(name = "USER_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
	@SequenceGenerator(name="user_seq", sequenceName = "user_seq", initialValue = 1000, allocationSize = 1)
	private Long id;
	
	@Column(name = "FIRST_NAME")
	private String firstName;
	
	@Column(name = "LAST_NAME")
	private String lastName;
	
	@Column(name = "USERNAME")
	private String userName;
	
	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "MOBILE")
	private String mobile;
	
	@Column(name = "ROLE")
	private String role;
	
	@Column(name = "EMAIL_NOTIFICATION")
	private boolean emailNotification;
	
	@Column(name = "PUSH_NOTIFICATION")
	private boolean pushNotification;
	
	@Column(name = "ACTIVE")
	private boolean active;
	
	@Column(name = "SHARE_REPORT_FOR_MY_RUN")
	private boolean shareReportForMyRun;
	
	@Column(name = "SHARE_REPORT_FOR_ALL_RUN")
	private boolean shareReportAllRun;
	
	@Column(name = "SHARE_REPORT_FOR_TESTPACK")
	private boolean shareReportForTestPack;
	
}
