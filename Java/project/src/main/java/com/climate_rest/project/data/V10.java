package com.climate_rest.project.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v10_data")
public class V10 {
    
    @Id
    @Column(name="year_kyr_bp")
    private double kyr_bp;
    @Column(name="events")
    private String events;


    public V10() {
    }

    public V10(double kyr_bp, String events) {
        this.kyr_bp = kyr_bp;
        this.events = events;
    }

    public double getKyr_bp() {
        return this.kyr_bp;
    }

    public int getYr_bp(){
        return (int)(this.kyr_bp*1000);
    }

    public void setKyr_bp(Double kyr_bp) {
        this.kyr_bp = kyr_bp;
    }

    public String getevents() {
        return this.events;
    }

    public void setevents(String events) {
        this.events = events;
    }

    public V10 year(double kyr_bp) {
        setKyr_bp(kyr_bp);
        return this;
    }

    public V10 events(String events) {
        setevents(events);
        return this;
    }

}
