package com.climate_rest.project.data;

public class V8 {
    
    private int year;
    private String country;
    private double co2;

    public V8() {
    }

    public V8(int year, String country, double co2) {
        this.year = year;
        this.country = country;
        this.co2 = co2;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V8 year(int year) {
        setYear(year);
        return this;
    }

    public V8 country(String country) {
        setCountry(country);
        return this;
    }

    public V8 co2(double co2) {
        setCo2(co2);
        return this;
    }

}
