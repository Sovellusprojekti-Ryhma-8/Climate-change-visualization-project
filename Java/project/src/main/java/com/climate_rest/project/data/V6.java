package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v6_data")
public class V6 {
    
    @Id
    @Column(name="time_bp")
    private int year;
    @Column(name="co2")
    private double co2;


    public V6() {
    }

    public V6(int year, double co2) {
        this.year = year;
        this.co2 = co2;
    }

    public int getYear() {
        return this.year;
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

    public V6 year(int year) {
        setYear(year);
        return this;
    }

    public V6 co2(double co2) {
        setCo2(co2);
        return this;
    }

}
