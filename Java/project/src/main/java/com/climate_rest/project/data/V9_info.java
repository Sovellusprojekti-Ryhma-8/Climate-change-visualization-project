package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v9_data")
public class V9_info{
    
    @Id
    @Column(name="sub_sector_info")
    private String sector_info;
    @Column(name="emissions")
    private double co2;

    public V9_info() {
    }

    public V9_info(String sector_info, double co2) {
        this.sector_info = sector_info;
        this.co2 = co2;
    }

    public String getsector_info() {
        return this.sector_info;
    }

    public void setsector_info(String sector_info) {
        this.sector_info = sector_info;
    }

    public double getco2() {
        return this.co2;
    }

    public void setco2(double co2) {
        this.co2 = co2;
    }

    public V9_info sector_info(String sector_info) {
        setsector_info(sector_info);
        return this;
    }

    public V9_info co2(double co2) {
        setco2(co2);
        return this;
    }

}
