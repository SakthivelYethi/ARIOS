package com.arios.user.service.entity.service;

import java.util.List;

import com.arios.user.service.entity.User;

public interface UserService {

	User saveUser(User user);

	List<User> getUsers();

	User getUserById(Long id);

}
