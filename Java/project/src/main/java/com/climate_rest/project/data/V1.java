package com.climate_rest.project.data;

public class V1 {
    
    private String timeMonthly;
    private String timeAnnual;
    private float globalMonthly;
    private float globalAnnual;
    private float northernMonthly;
    private float northernAnnual;
    private float southernMonthly;
    private float southernAnnual;


    public V1(String timeAnnual, String timeMonthly, float globalMonthly, float globalAnnual,
     float northernMonthly, float northernAnnual, float southernMonthly, float southernAnnual) {
        this.timeMonthly = timeMonthly;
        this.timeAnnual = timeAnnual;
        this.globalMonthly = globalMonthly;
        this.globalAnnual = globalAnnual;
        this.northernMonthly = northernMonthly;
        this.northernAnnual = northernAnnual;
        this.southernMonthly = southernMonthly;
        this.southernAnnual = southernAnnual;
    }




    public String getTimeMonthly() {
        return this.timeMonthly;
    }

    public void setTimeMonthly(String timeMonthly) {
        this.timeMonthly = timeMonthly;
    }

    public String getTimeAnnual() {
        return this.timeAnnual;
    }

    public void setTimeAnnual(String timeAnnual) {
        this.timeAnnual = timeAnnual;
    }

    public float getGlobalMonthly() {
        return this.globalMonthly;
    }

    public void setGlobalMonthly(float globalMonthly) {
        this.globalMonthly = globalMonthly;
    }

    public float getGlobalAnnual() {
        return this.globalAnnual;
    }

    public void setGlobalAnnual(float globalAnnual) {
        this.globalAnnual = globalAnnual;
    }

    public float getNorthernMonthly() {
        return this.northernMonthly;
    }

    public void setNorthernMonthly(float northernMonthly) {
        this.northernMonthly = northernMonthly;
    }

    public float getNorthernAnnual() {
        return this.northernAnnual;
    }

    public void setNorthernAnnual(float northernAnnual) {
        this.northernAnnual = northernAnnual;
    }

    public float getSouthernMonthly() {
        return this.southernMonthly;
    }

    public void setSouthernMonthly(float southernMonthly) {
        this.southernMonthly = southernMonthly;
    }

    public float getSouthernAnnual() {
        return this.southernAnnual;
    }

    public void setSouthernAnnual(float southernAnnual) {
        this.southernAnnual = southernAnnual;
    }

}
