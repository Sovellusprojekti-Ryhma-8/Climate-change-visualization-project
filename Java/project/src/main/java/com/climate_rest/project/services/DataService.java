package com.climate_rest.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climate_rest.project.data.V1_annual;
import com.climate_rest.project.repo.V1_annualRepo;

import com.climate_rest.project.data.V1;
import com.climate_rest.project.data.V3_annual;
import com.climate_rest.project.repo.V1_monthlyRepo;
import com.climate_rest.project.repo.V3_annualRepo;

import java.util.List;

@Service
public class DataService {

    @Autowired
    V1_annualRepo v1annualRepo;

    @Autowired
    V1_monthlyRepo v1monthlyRepo;
    
    @Autowired
    V3_annualRepo v3Repo;

    public List<V3_annual> getV3_annualData(){
        return v3Repo.findAll();
    }

    public List<V1_annual> getV1_annualData(){
        return v1annualRepo.findAll();
    }

    public List<V1> getV1_monthlyData(){
        return v1monthlyRepo.findAll();
    }

}
