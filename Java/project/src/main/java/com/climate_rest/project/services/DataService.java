package com.climate_rest.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climate_rest.project.data.V3_annual;
import com.climate_rest.project.repo.V3_annualRepo;

import java.util.List;

@Service
public class DataService {
    
    @Autowired
    V3_annualRepo v3Repo;

    public List<V3_annual> getV3_annualData(){
        return v3Repo.findAll();
    }

}
