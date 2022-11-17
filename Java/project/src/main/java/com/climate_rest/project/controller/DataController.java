package com.climate_rest.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.climate_rest.project.data.V3_annual;
import com.climate_rest.project.services.DataService;

import java.util.List;

@CrossOrigin
@RestController
public class DataController {
    
    @Autowired
    DataService v3Service;

    @GetMapping("V3annual")
    public List<V3_annual> getV3_annualData(){
        return v3Service.getV3_annualData();
    }
}
