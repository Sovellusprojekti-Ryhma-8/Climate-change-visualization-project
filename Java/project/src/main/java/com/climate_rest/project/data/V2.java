package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="v2_data")
public class V2{

    @Id
    @Column(name="time")
    private int year;
    @Column(name="temperature")
    private double temp;

    public V2(int year, double temp){
        this.year=year;
        this.temp=temp;
    }

    public V2(){}

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