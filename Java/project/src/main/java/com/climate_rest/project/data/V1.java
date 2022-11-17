package com.climate_rest.project.data;

public class V1 {
    
    private String timeMonthly;  
    private float globalMonthly;   
    private float northernMonthly;   
    private float southernMonthly;
    


    public V1(String timeMonthly, float globalMonthly,
     float northernMonthly, float southernMonthly) {
        this.timeMonthly = timeMonthly;
        this.globalMonthly = globalMonthly;
        this.northernMonthly = northernMonthly;
        this.southernMonthly = southernMonthly;
    }




    public String getTimeMonthly() {
        return this.timeMonthly;
    }

    public void setTimeMonthly(String timeMonthly) {
        this.timeMonthly = timeMonthly;
    }

    public float getGlobalMonthly() {
        return this.globalMonthly;
    }

    public void setGlobalMonthly(float globalMonthly) {
        this.globalMonthly = globalMonthly;
    }

    public float getNorthernMonthly() {
        return this.northernMonthly;
    }

    public void setNorthernMonthly(float northernMonthly) {
        this.northernMonthly = northernMonthly;
    }

    public float getSouthernMonthly() {
        return this.southernMonthly;
    }

    public void setSouthernMonthly(float southernMonthly) {
        this.southernMonthly = southernMonthly;
    }

}
