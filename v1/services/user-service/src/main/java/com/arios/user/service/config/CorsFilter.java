package com.arios.user.service.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Cors filter allowing cross-domain requests
 * Needed for Heroku deployment
 *
 * @author valeryyakovlev
 */
@Configuration
public class CorsFilter implements WebMvcConfigurer  {
	   @Override
	    public void addCorsMappings(CorsRegistry registry) {
		   System.out.println("CROS Configred..");
	        registry.addMapping("/**")
	                .allowedOrigins("http://localhost:4200")
	                .allowedMethods("GET","POST");
	    }
}