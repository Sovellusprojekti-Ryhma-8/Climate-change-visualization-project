package com.climate_rest.project.data;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="views")
public class view {

    @Id
    @Column(name="Id")
    private String Id;
    @Column(name="visualizations")
    private String visualizations;
    @Column(name="descriptions")
    private String descriptions;
    @Column(name="style")
    private int style;
    @Column(name="user")
    private String user;

    public view() {

    }

    public view(String Id, String visualizations,
    String descriptions, int style, String user) {
        this.Id = Id;
        this.visualizations = visualizations;
        this.descriptions = descriptions;
        this.style = style;
        this.user = user;
    }


    public String getId() {
        return this.Id;
    }

    public void setId(String Id) {
        this.Id = Id;
    }

    public List<String> getVisualizations() {
        
        return Arrays.asList(visualizations.split(";"));
    }

    public void setVisualizations(String visualizations) {
        this.visualizations = visualizations;
    }

    public List<String> getDescriptions() {
        return Arrays.asList(descriptions.split(";"));
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public int getStyle() {
        return this.style;
    }

    public void setStyle(int style) {
        this.style = style;
    }

    public String getUser() {
        return this.user;
    }

    public void setUser(String user) {
        this.user = user;
    }

}