package com.climate_rest.project.repo;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.climate_rest.project.data.V8;

@Repository
public interface V8_Repo extends JpaRepository<V8, Integer> {
    
    @Query(value = "SELECT * FROM v8_data_karsittu", nativeQuery = true)
    List<Map<String, Object>> getAllData();
}
