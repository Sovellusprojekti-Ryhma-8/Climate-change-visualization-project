package com.climate_rest.project.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.User;

@Repository
public interface usersRepo extends JpaRepository<User, Integer> {    
    List<User> findByName(String userName);
} 