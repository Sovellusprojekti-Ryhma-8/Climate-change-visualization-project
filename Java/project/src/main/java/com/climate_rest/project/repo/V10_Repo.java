package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climate_rest.project.data.V10;

@Repository
public interface V10_Repo extends JpaRepository<V10, Integer> {
    
}
