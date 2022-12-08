package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v9_sector")
public class V9_sector{

    @Id
    @Column(name="sector")
    private String sector;
    @Column(name="emissions")
    private double co2;

    public V9_sector() {
    }

    public V9_sector(String sector, double co2) {
        this.sector = sector;
        this.co2 = co2;
    }

    public String getSector() {
        return this.sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public double getco2() {
        return this.co2;
    }

    public void setco2(double co2) {
        this.co2 = co2;
    }

    public V9_sector sector(String sector) {
        setSector(sector);
        return this;
    }

    public V9_sector co2(double co2) {
        setco2(co2);
        return this;
    }

}
