package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="v1_annual")
public class V1_annual {
    @Id
    @Column(name="time")
    private int time;
    @Column(name="global_anomaly")
    private double global;
    @Column(name="northern_anomaly")
    private double northern;
    @Column(name="southern_anomaly")
    private double southern;

    public V1_annual() {}

    public V1_annual(int time, double global, double northern, double southern) {
        this.time = time;
        this.global = global;
        this.northern = northern;
        this.southern = southern;
    }


    public String getYear() {
        return Integer.toString(this.time);
    }

    public void setYear(int time) {
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
