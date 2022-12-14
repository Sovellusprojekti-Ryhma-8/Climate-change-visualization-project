package com.climate_rest.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V3_monthly;

@Repository
public interface V3_monthlyRepo extends JpaRepository<V3_monthly, Integer>{

}
