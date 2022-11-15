package com.climate_rest.project.data;

public class V7 {
    
    private int year;
    private double temp;
    private double co2;

    public V7() {
    }

    public V7(int year, double temp, double co2) {
        this.year = year;
        this.temp = temp;
        this.co2 = co2;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getTemp() {
        return this.temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V7 year(int year) {
        setYear(year);
        return this;
    }

    public V7 temp(double temp) {
        setTemp(temp);
        return this;
    }

    public V7 co2(double co2) {
        setCo2(co2);
        return this;
    }

}
