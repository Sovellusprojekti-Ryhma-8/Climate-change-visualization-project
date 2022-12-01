package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V7;

@Repository
public interface V7_Repo extends JpaRepository<V7, Integer> {
    
}
