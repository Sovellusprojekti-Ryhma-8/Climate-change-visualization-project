package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V2;

@Repository
public interface V2_Repo extends JpaRepository<V2, Integer> {
    
}
