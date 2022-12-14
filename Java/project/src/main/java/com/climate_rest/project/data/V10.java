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
    private double year;
    @Column(name="events")
    private String events;

    public V10() {
    }

    public V10(double year, String events) {
        this.year = year;
        this.events = events;
    }

    public double getyear() {
        return this.year;
    }

    public void setyear(double year) {
        this.year = year;
    }

    public String getevents() {
        return this.events;
    }

    public void setevents(String events) {
        this.events = events;
    }

    public V10 year(double year) {
        setyear(year);
        return this;
    }

    public V10 events(String events) {
        setevents(events);
        return this;
    }

}
