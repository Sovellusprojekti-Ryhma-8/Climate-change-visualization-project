package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v9_data")
public class V9 {
    
    @Id
    @Column(name="sub_sector")
    private String sector;
    @Column(name="emissions")
    private double co2;

    public V9() {
    }

    public V9(String sector, double co2) {
        this.sector = sector;
        this.co2 = co2;
    }

    public String getSector() {
        return this.sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V9 sector(String sector) {
        setSector(sector);
        return this;
    }

    public V9 co2(double co2) {
        setCo2(co2);
        return this;
    }

}
