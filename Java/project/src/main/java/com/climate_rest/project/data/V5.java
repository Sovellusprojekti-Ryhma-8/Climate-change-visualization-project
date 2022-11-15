package com.climate_rest.project.data;

public class V5 {

    private int year;
    private double co2;


    public V5() {
    }

    public V5(int year, double co2) {
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

    public V5 year(int year) {
        setYear(year);
        return this;
    }

    public V5 co2(double co2) {
        setCo2(co2);
        return this;
    }
    
}
