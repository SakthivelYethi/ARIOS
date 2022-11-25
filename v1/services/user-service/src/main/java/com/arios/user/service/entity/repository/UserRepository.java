package com.arios.user.service.entity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arios.user.service.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
