package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v1_monthly")
public class V1 {
    
    @Id
    @Column(name="time")
    private String time;
    @Column(name="global_anomaly")  
    private double global;   
    @Column(name="northern_anomaly")
    private double northern;   
    @Column(name="southern_anomaly")
    private double southern;
    
    public V1() {}

    public V1(String time, double global,
     double northern, double southern) {
        this.time = time;
        this.global = global;
        this.northern = northern;
        this.southern = southern;
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getGlobal() {
        return this.global;
    }

    public void setGlobal(double global) {
        this.global = global;
    }

    public double getNorthern() {
        return this.northern;
    }

    public void setNorthern(double northern) {
        this.northern = northern;
    }

    public double getSouthern() {
        return this.southern;
    }

    public void setSouthern(double southern) {
        this.southern = southern;
    }

}
