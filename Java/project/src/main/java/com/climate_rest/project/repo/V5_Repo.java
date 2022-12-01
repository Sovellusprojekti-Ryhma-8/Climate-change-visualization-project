package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climate_rest.project.data.V5;

@Repository
public interface V5_Repo extends JpaRepository<V5, Integer> {
    
}
