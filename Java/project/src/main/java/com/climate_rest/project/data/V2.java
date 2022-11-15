package com.climate_rest.project.data;

public class V2{

    private int year;
    private double temp;

    public V2(){}

    public V2(int year, double temp){
        this.year=year;
        this.temp=temp;
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

    public V2 year(int year) {
        setYear(year);
        return this;
    }

    public V2 temp(double temp) {
        setTemp(temp);
        return this;
    }

}