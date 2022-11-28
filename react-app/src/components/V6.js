import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

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
        labels: chartData.map(d => d.year),
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
                text: ""   // Otsikko
            },
        },
        scales: {
            yAxis: {
                type: "linear",
                display: true,
                position: "right"
            },
            x: {
                reverse: true,
                title: {
                    display: true,
                    text: "Time before present"
                }
            }
        }
    }

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}