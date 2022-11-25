package com.arios.user.service.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arios.user.service.entity.User;
import com.arios.user.service.entity.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public User saveUser(User user) {
		user = userRepository.save(user);
		return user;
	}


	@Override
	public List<User> getUsers() {
		List<User> users = userRepository.findAll();
		return users;
	}


	@Override
	public User getUserById(Long id) {
		User user = userRepository.findById(id).get();
		return user;
	}

}
