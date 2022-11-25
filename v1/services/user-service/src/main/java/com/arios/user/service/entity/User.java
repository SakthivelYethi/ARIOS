package com.arios.user.service.entity;

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
@Table(name = "TBL_USERS")
@Entity
@ToString
public class User {
	
	
	@Id
	@Column(name = "USER_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
	@SequenceGenerator(name="user_seq", sequenceName = "user_seq", initialValue = 1000, allocationSize = 1)
	private Long id;
	
	@Column(name = "FIRST_NAME")
	private String firstName;
	
	@Column(name = "LAST_NAME")
	private String lastName;
	
	@Column(name = "EMAIL_ID")
	private String emailId;
	
	@Column(name = "MOBILE_NUMBER")
	private String mobileNumber;
	
	@Column(name = "USER_NAME")
	private String userName;
	
	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "EMAIL_NOTIFICATION")
	private boolean enableEmailNotification;
	
	@Column(name = "PUSH_NOTIFICATION")
	private boolean enablePushNotification;
	
	@Column(name = "SEND_REPORT")
	private boolean sendReportNotification;
	
	@Column(name = "SMS_NOTIFICATION")
	private boolean smsNotification;
	
	@Column(name = "PASSWORD_POLICY_NOTIFICATION")
	private boolean posswordPolicyNotification;
	
	@Column(name = "SEND_REPORT_TO_GROUP_NOTIFICATION")
	private boolean sendReportToGroupNotification;
}
