package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v3_annual")
public class V3_annual {
    @Id
    private int id;
    @Column(name="time")
    private int year;
    @Column(name="co2")
    private double co2;


    public V3_annual() {
    }

    public V3_annual(int time, double co2) {
        this.year = time;
        this.co2 = co2;
    }

    public String getTime() {
        //return this.year + "-01";
        return Integer.toString(year);
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V3_annual year(int year) {
        setYear(year);
        return this;
    }

    public V3_annual co2(double co2) {
        setCo2(co2);
        return this;
    }

}
