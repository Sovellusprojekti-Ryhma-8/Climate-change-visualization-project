import React from "react";
import { useState, useEffect } from "react";
import { Chart as chartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

const URL = "http://localhost:8080/V2"

export default function V2() {
    const [chartData, setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setData(res.data)
        }).catch(error => {
            alert(error)
        })
    },[])

    const data = {
        labels: chartData.map(d => d.year),
        datasets: [
            {
                label:"Temperature",
                data: chartData.map(d => d.temp),
                borderWidth: 2,
                borderColor:  "rgb(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
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
                text: "Northern Hemisphere 2000-year temperature reconstruction",
            },
            subtitle: {
                display: true,
                text: "2000-year temperature reconstruction mainly from tree-ring data and other data sets."
            }
        },
        scales: {
            yAxis: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: "K"
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Year"
                }
            }
        },
    }

    return (
        <div>
            <Line data={data} options={options}/>
            <div>
                <h4>Data source</h4>
                <p>
                    <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005" target="_blank">Temperature reconstruction</a>
                </p>
            </div>
        </div>
    )

}