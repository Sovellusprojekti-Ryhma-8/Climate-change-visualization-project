package com.climate_rest.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climate_rest.project.data.V1_annual;
import com.climate_rest.project.data.V2;
import com.climate_rest.project.repo.V10_Repo;
import com.climate_rest.project.repo.V1_annualRepo;

import com.climate_rest.project.data.V1;
import com.climate_rest.project.data.V10;
import com.climate_rest.project.data.V3_annual;
import com.climate_rest.project.data.V7;
import com.climate_rest.project.data.V9_info;
import com.climate_rest.project.data.V9_sector;
import com.climate_rest.project.repo.V1_monthlyRepo;
import com.climate_rest.project.data.V3_monthly;
import com.climate_rest.project.data.V4;
import com.climate_rest.project.repo.V2_Repo;
import com.climate_rest.project.repo.V3_annualRepo;
import com.climate_rest.project.repo.V7_Repo;
import com.climate_rest.project.repo.V9_infoRepo;
import com.climate_rest.project.repo.V9_sectorRepo;
import com.climate_rest.project.repo.V3_monthlyRepo;
import com.climate_rest.project.repo.V4_Repo;
import com.climate_rest.project.repo.V5_Repo;
import com.climate_rest.project.repo.V6_repo;
import com.climate_rest.project.data.V5;
import com.climate_rest.project.data.V6;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DataService {

    @Autowired
    V1_annualRepo v1annualRepo;

    @Autowired
    V1_monthlyRepo v1monthlyRepo;

    @Autowired
    V2_Repo v2repo;
    
    @Autowired
    V3_annualRepo v3annualRepo;

    @Autowired
    V3_monthlyRepo v3monthlyRepo;

    @Autowired
    V4_Repo v4repo;

    @Autowired
    V5_Repo v5repo;

    @Autowired
    V6_repo v6repo;

    @Autowired
    V7_Repo v7Repo;

    @Autowired
    V9_infoRepo v9Repo;

    @Autowired
    V9_sectorRepo v9secRepo;

    @Autowired
    V10_Repo v10Repo;


    public List<V3_annual> getV3_annualData(){
        return v3annualRepo.findAll();
    }
    public List<V3_monthly> getV3_monthlyData(){
        return v3monthlyRepo.findAll();
    }

    public List<V1_annual> getV1_annualData(){
        return v1annualRepo.findAll();
    }

    public List<V1> getV1_monthlyData(){
        return v1monthlyRepo.findAll();
    }

    public List<V7> getV7_data(){
        return v7Repo.findAll();
    }
    public List<V2> getV2_Data() {
        return v2repo.findAll();
    }

    public Map<String, List<V4>> getV4_Data(){
        List<V4> data = v4repo.findAll();
        Map<String, List<V4>> dataGrouped = data.stream().collect(Collectors.groupingBy(w -> w.getIce_core()));
        return dataGrouped;
    }

    public List<V5> getV5_Data() {
        return v5repo.findAll();
    }

    public List<V9_info> getV9_data() {
        return v9Repo.findAll();
    }

    public List<V9_sector> getV9_sector() {
        return v9secRepo.findAll();
    }

    public List<V10> getV10_data() {
        return v10Repo.findAll();
    }
    public List<V6> getV6_Data() {
        return v6repo.findAll();
    }
}
