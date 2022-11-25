package com.arios.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class AriosServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AriosServerApplication.class, args);
	}

}
