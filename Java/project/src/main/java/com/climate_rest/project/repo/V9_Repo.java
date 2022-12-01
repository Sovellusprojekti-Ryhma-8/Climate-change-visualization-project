package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climate_rest.project.data.V9;

@Repository
public interface V9_Repo extends JpaRepository<V9, Integer>{
    
}
