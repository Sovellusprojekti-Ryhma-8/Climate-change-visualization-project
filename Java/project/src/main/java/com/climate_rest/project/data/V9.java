package com.climate_rest.project.data;

public class V9 {
    
    private String sector;
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
