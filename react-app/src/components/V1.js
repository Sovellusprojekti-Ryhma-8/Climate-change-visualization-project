import React from "react";
import { useState, useEffect } from "react";
import { Chart as chartJS } from "chart.js/auto";
import {Line } from "react-chartjs-2";
import axios from "axios";
import 'chartjs-adapter-moment';

const URL_annual = "http://localhost:8080/V1annual"
const URL_monthly = "http://localhost:8080/V1monthly"

export default function V1() {
    const [annualData, setAnnualData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    
    useEffect(() => {
        axios.get(URL_annual)
        .then((res) => {
            setAnnualData(res.data)
            console.log(annualData)
        }).catch(error => {
            alert(error)
        })

        axios.get(URL_monthly)
        .then((res) => {
            setMonthlyData(res.data)
            console.log(monthlyData)
        }).catch(error => {
            alert(error)
        })

    },[])

    const data = {

        datasets: [
            {
                label:"global annual",
                data: annualData,
                borderWidth: 2,
                borderColor:  "rgb(60, 179, 113)",
                backgroundColor: "rgba(60, 179, 113, 0.5)",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "global",
                },
                pointRadius: 1,
            },
            {
                label:"Northern annual",
                data: annualData,
                borderWidth: 2,
                borderColor:  "rgb(0, 0, 255)",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "northern",
                },
                pointRadius: 1,
            },
            {
                label:"Southern annual",
                data: annualData,
                borderWidth: 2,
                borderColor:  "rgb(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "southern",
                },
                pointRadius: 1,
            },
            {
                label:"Monthly global",
                data: monthlyData,
                borderWidth: 2,
                borderColor:  "rgb(0, 0, 0)",
                backgroundColor: "rgba(60, 179, 113, 0.5)",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "global",
                },
                pointRadius: 1,
            },
            {
                label:"Monthly northern",
                data: monthlyData,
                borderWidth: 2,
                borderColor:  "rgb(0, 0, 255)",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "northern",
                },
                pointRadius: 1,
            },
            {
                label:"Monthly southern",
                data: monthlyData,
                borderWidth: 2,
                borderColor:  "rgb(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "southern",
                },
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
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                }
            },
            xAxis: {
                display: false,
                type: 'time',
                time: {
                    unit: 'year'
                }
            },

            yAxis: {
                type: "linear",
                display: true,
                position: "right",
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}