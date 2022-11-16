package com.climate_rest.project.data;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v3_annual")
public class V3_annual {
    @Id
    @Column(name="time")
    private int time;
    @Column(name="co2")
    private double co2;


    public V3_annual() {
    }

    public V3_annual(int time, double co2) {
        this.time = time;
        this.co2 = co2;
    }

    public int getYear() {
        return this.time;
    }

    public void setYear(int year) {
        this.time = year;
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
