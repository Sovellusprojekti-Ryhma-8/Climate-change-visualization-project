package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "v4_data")
public class V4 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "ice_core")
    private String ice_core;
    @Column(name = "time")
    private int time;
    @Column(name = "co2")
    private double co2;

    public V4() {
    }

    public V4(String ice_core, int time, double co2) {
        this.ice_core = ice_core;
        this.time = time;
        this.co2 = co2;
    }

    @JsonIgnore
    public String getIce_core(){
        return this.ice_core;
    }

    public String getTime() {
        return Integer.toString(time);
    }

    public void setTime(int time) {
        this.time = time;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V4 Time(int time) {
        setTime(time);
        return this;
    }

    public V4 co2(double co2) {
        setCo2(co2);
        return this;
    }

}
