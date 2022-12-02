package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="v8_data_karsittu")
public class V8 {
    
    @Id
    private int id;
    @Column(name = "year")
    private String year;
    private String country;
    private double co2;

    public V8() {
    }

    public V8(String year, String country, double co2) {
        this.year = year;
        this.country = country;
        this.co2 = co2;
    }

    public String getYear() {
        return this.year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getCountry() {
        return this.country;
    }

    @JsonIgnore
    public void setCountry(String country) {
        this.country = country;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V8 year(String year) {
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
