package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V4;

@Repository
public interface V4_Repo extends JpaRepository<V4, Integer>{
    
}
