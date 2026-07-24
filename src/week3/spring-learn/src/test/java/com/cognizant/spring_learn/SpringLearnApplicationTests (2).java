package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplicationTests {

	private static final Logger LOGGER =
			LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(SpringLearnApplication.class, args);

		LOGGER.info("Inside Main");
	}
}
