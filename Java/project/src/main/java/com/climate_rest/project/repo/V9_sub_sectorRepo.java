package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climate_rest.project.data.V9_sub_sector;

@Repository
public interface V9_sub_sectorRepo extends JpaRepository<V9_sub_sector, Integer>{
    
}
