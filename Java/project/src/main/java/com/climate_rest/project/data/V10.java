package com.climate_rest.project.data;

public class V10 {
    
    private int year;
    private String event;

    public V10() {
    }

    public V10(int year, String event) {
        this.year = year;
        this.event = event;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getEvent() {
        return this.event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public V10 year(int year) {
        setYear(year);
        return this;
    }

    public V10 event(String event) {
        setEvent(event);
        return this;
    }

}
