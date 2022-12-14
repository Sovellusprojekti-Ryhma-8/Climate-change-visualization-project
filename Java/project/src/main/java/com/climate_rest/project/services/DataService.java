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
import com.climate_rest.project.data.V8;
import com.climate_rest.project.data.view;
import com.climate_rest.project.repo.V1_monthlyRepo;
import com.climate_rest.project.data.V3_monthly;
import com.climate_rest.project.data.V4;
import com.climate_rest.project.repo.V2_Repo;
import com.climate_rest.project.repo.V3_annualRepo;
import com.climate_rest.project.repo.V7_Repo;
import com.climate_rest.project.repo.V9_infoRepo;
import com.climate_rest.project.repo.V9_sectorRepo;
import com.climate_rest.project.repo.V8_Repo;
import com.climate_rest.project.repo.viewsRepo;
import com.climate_rest.project.repo.V3_monthlyRepo;
import com.climate_rest.project.repo.V4_Repo;
import com.climate_rest.project.repo.V5_Repo;
import com.climate_rest.project.repo.V6_repo;
import com.climate_rest.project.data.V5;
import com.climate_rest.project.data.V6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
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


    @Autowired
    V8_Repo v8Repo;

    @Autowired
    viewsRepo viewsRepo;


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

    public Map<String,List<V8>> getV8_Data(){
        //Get data from database
        List<Map<String,Object>> data = v8Repo.getAllData();
        //Create new list of V8 objects that have year, country and co2
        List<V8> result = new ArrayList<>();

        //Loop through data to add them to list as V8 objects
        for (Map<String,Object> map : data) {
            String year = map.get("year").toString();
            for(Map.Entry<String, Object> entry : map.entrySet()){
                //Filter column "year" away
                if(!entry.getKey().equals("year")){
                    result.add(new V8(year, entry.getKey(), (Double.valueOf(entry.getValue().toString()))));
                }
            }
            
        }
        

        //Group list to map by country
        Map<String,List<V8>> resultGrouped = result.stream().collect(Collectors.groupingBy(w -> w.getCountry()));
        
        return sortCountriesByCO2(resultGrouped);
    }


    //Sorts coutries by total CO2 emissions
    private Map<String,List<V8>> sortCountriesByCO2(Map<String,List<V8>> map){
        List<Entry<String,List<V8>>> countriesListed = new LinkedList<>(map.entrySet());

        Collections.sort(countriesListed, new Comparator<Entry<String,List<V8>>>() {
            public int compare(Entry<String,List<V8>> list1, Entry<String,List<V8>> list2){
                double sum1 = list1.getValue().stream().mapToDouble(o -> o.getCo2()).sum();
                double sum2 = list2.getValue().stream().mapToDouble(o -> o.getCo2()).sum();
                if(sum1 > sum2){
                    return 1;
                }else if(sum2 > sum1){
                    return -1;
                }else{
                    return 0;
                }
            }
        });

        Map<String,List<V8>> sortedList = new LinkedHashMap<String,List<V8>>();
        for (Entry<String,List<V8>> entry : countriesListed){
            sortedList.put(entry.getKey(), entry.getValue());
        }

        return sortedList;
    }

    /*User made views are saved */

    public view saveView(String Id, List<String> visuals,
    List<String> descs, int style, String user) {
        
        Collections.sort(visuals); // Visualizations get sorted in right display order
        Collections.sort(descs);
        
        List<String> visualizations = new ArrayList<>();
        List<String> descriptions = new ArrayList<>();
        
        for (String string : visuals) {
            visualizations.add(string.substring(2));
        }
        
        for (String string : descs) {
            descriptions.add(string.substring(2));
        }
        String visualString = String.join(";", visualizations);
        String descsString = String.join(";", descriptions);

        view v = new view(Id,visualString,descsString,style,user);
        //repo savet tähän
        try {
            viewsRepo.save(v);
        } catch (Exception e) {
            
        }
    
        return v;
     }

     /*User made view is found by its Id */

     public view getView(String Id) {
            try {
                view v = viewsRepo.findById(Id).orElse(null);
                return v;
            } catch (Exception e) {
                return null;
            }
     }
    

     /*User gets own views */

     public List<String> getMyViews(String user) {
        List<String> myViews = new ArrayList<>();
        List<view> views = new ArrayList<>();
        views = viewsRepo.findByuser(user);

        for (view v : views) {
            if (user.equals(v.getUser())){
                myViews.add(v.getId());
            }
        }
        return myViews;
     }

    public view deleteView(String Id) {
        view v = viewsRepo.findById(Id).orElse(null);
        if (v != null) {
            viewsRepo.delete(v);
            return v;
        }
        return null;
    }

    public void deleteUsersViews(String user) {
        List<view> views = new ArrayList<>();
        views = viewsRepo.findByuser(user);

        for (view v : views) {
            viewsRepo.delete(v);           
        }
    }
}
