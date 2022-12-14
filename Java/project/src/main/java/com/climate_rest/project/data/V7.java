package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v7_data")
public class V7 {
    
    @Id
    @Column(name="time_kyr_bp")
    private int kyr_bp;
    @Column(name="temperature_change")
    private double temp;
    @Column(name="co2")
    private double co2;

    public V7() {}

    public V7(int kyr_bp, double temp, double co2) {
        this.kyr_bp = kyr_bp;
        this.temp = temp;
        this.co2 = co2;
    }

    public int getkyr_bp() {
        return this.kyr_bp;
    }

    public void setkyr_bp(int kyr_bp) {
        this.kyr_bp = kyr_bp;
    }

    public double getTemp() {
        return this.temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public V7 kyr_bp(int kyr_bp) {
        setkyr_bp(kyr_bp);
        return this;
    }

    public V7 temp(double temp) {
        setTemp(temp);
        return this;
    }

    public V7 co2(double co2) {
        setCo2(co2);
        return this;
    }

}
