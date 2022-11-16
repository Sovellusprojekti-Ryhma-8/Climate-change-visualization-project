package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V3_annual;

@Repository
public interface V3_annualRepo extends JpaRepository<V3_annual, Integer>{

}
