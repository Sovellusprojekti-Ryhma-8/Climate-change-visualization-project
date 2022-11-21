package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v3_monthly")
public class V3_monthly {
    @Id
    private int id;
    @Column(name="year")
    private int year;
    @Column(name="month")
    private String month;
    @Column(name="co2")
    private double co2;


    public V3_monthly() {
    }

    public V3_monthly(int year, String month, double co2) {
        this.year = year;
        this.month = month;
        this.co2 = co2;
    }

    public String getTime(){
        return this.year + "-" + this.month;
    }

    /* public int getYear() {
        return this.year;
    } */

    public void setYear(int year) {
        this.year = year;
    }

    /* public String getMonth() {
        return this.month;
    } */

    public void setMonth(String month){
        this.month = month;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }
}
