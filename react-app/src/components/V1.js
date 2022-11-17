import React from "react";
import { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import {Line } from "react-chartjs-2";
import axios from "axios";

const URL = "http://localhost:8080/V1annual"

export default function V1() {
    const [annualData, setAnnualData] = useState([]);
    
    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setAnnualData(res.data)
            console.log(annualData)
        }).catch(error => {
            alert(error)
        })
    },[])

    const data = {
        labels: annualData.map(d => d.year),
        datasets: [
            {
                label:"global",
                data: annualData.map(d => d.global),
                borderColor:  "rgb(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
                yAxisID: "global",
                pointRadius: 1,
            },
            {
                label:"northern",
                data: annualData.map(d => d.northern),
                borderColor:  "rgb(0, 0, 255)",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                yAxisID: "northern",
                pointRadius: 1,
            },
            {
                label:"southern",
                data: annualData.map(d => d.southern),
                borderColor:  "rgb(255, 99, 120)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "southern",
                pointRadius: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "V1",
            },
        },
        scales: {
            global: {
                type: "linear",
                display: true,
                position: "right",
            },
        },
    };

    return (
        <div style={{width:"1000px"}}>
            <Line data={data} options={options}/>
        </div>
    )
}