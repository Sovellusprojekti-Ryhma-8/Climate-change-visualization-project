package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V1_annual;

@Repository
public interface V1_annualRepo extends JpaRepository<V1_annual, Integer> {
    
}
