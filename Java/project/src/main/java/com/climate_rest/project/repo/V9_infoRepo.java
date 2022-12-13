package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climate_rest.project.data.V9_info;

@Repository
public interface V9_infoRepo extends JpaRepository<V9_info, Integer>{
    
}
