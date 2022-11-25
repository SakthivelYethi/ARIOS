package com.arios.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@SpringBootApplication
/* @EnableWebMvc */
public class AriosGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(AriosGatewayApplication.class, args);
	}

}
