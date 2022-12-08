package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v9_sub_sector")
public class V9_sub_sector {
    
    @Id
    @Column(name="sub_sector")
    private String sub_sector;
    @Column(name="emissions")
    private double co2;

    public V9_sub_sector() {
    }

    public V9_sub_sector(String sub_sector, double co2) {
        this.sub_sector = sub_sector;
        this.co2 = co2;
    }

    public String getSub_sector() {
        return this.sub_sector;
    }

    public void setSub_sector(String sub_sector) {
        this.sub_sector = sub_sector;
    }

    public double getco2() {
        return this.co2;
    }

    public void setco2(double co2) {
        this.co2 = co2;
    }

    public V9_sub_sector sub_sector(String sub_sector) {
        setSub_sector(sub_sector);
        return this;
    }

    public V9_sub_sector co2(double co2) {
        setco2(co2);
        return this;
    }

}
