package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.climate_rest.project.data.view;

@Repository
public interface viewsRepo extends JpaRepository<view, String>{
    
    List<view> findByuser(String user);
}
