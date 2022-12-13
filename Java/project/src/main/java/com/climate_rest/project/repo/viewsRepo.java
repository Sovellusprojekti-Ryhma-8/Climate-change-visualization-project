package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.view;

@Repository
public interface viewsRepo extends JpaRepository<view, String>{
    
}
