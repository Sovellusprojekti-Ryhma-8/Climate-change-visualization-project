import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const URL = "http://localhost:8080/V6"

export default function V6() {
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
        labels: chartData.map(d => 1950-d.year),
        datasets: [
            {
                label: "Co2",
                data: chartData.map(d => d.co2),
                borderWidth: 2,
                borderColor:  "rgb(60, 179, 113)",
                backgroundColor: "rgba(60, 179, 113, 0.5)",
                pointRadius: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Antarctic 800k year ice core Co2 measurements"   // Otsikko
            },
            subtitle: {
                display: true,
                text: "Reconstruction of atmospheric CO2 measurements from past 800,000 years."
            }
        },
        scales: {
            x: {
                reverse: true,
                title: {
                    display: true,
                    text: "Year"
                },
                ticks: {
                    maxTicksLimit: 50
                }
            },
            yAxis: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: "Co2"
                }
            },
        }
    }

    return (
        <div>
            <Line data={data} options={options}/>
            <div>
                <p>
                    Learn more about <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975" target="_blank">measurements</a>.
                </p>
                <h4>Data source</h4>
                <p>
                <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt" target="_blank">Co2 concentrations</a>
                </p>
            </div>
        </div>
    )
}