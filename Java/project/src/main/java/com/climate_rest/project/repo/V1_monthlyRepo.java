package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V1;

@Repository
public interface V1_monthlyRepo extends JpaRepository<V1, String> {
    
}
