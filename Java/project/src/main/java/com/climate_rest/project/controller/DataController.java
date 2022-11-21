package com.climate_rest.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.climate_rest.project.data.V3_annual;
import com.climate_rest.project.data.V3_monthly;
import com.climate_rest.project.services.DataService;

import java.util.List;

@CrossOrigin
@RestController
public class DataController {
    
    @Autowired
    DataService dataService;

    @GetMapping("V3annual")
    public List<V3_annual> getV3_annualData(){
        return dataService.getV3_annualData();
    }

    @GetMapping("V3monthly")
    public List<V3_monthly> getV3_monthlyData(){
        return dataService.getV3_monthlyData();
    }
}
