package com.climate_rest.project.data;

public class V3 {

    private int year;
    private int month;
    private double co2;


    public V3() {
    }

    public V3(int year, int month, double co2) {
        this.year = year;
        this.month = month;
        this.co2 = co2;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return this.month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V3 year(int year) {
        setYear(year);
        return this;
    }

    public V3 month(int month) {
        setMonth(month);
        return this;
    }

    public V3 co2(double co2) {
        setCo2(co2);
        return this;
    }

}
