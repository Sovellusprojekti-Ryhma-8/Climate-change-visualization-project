import React, { useEffect, useState } from "react";
import {Line} from "react-chartjs-2"
import axios from 'axios'

const URL = 'http://localhost:8080/V7'

export default function V7() {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setChartData(response.data)
                console.log(chartData)
            }).catch(error => {
                alert(error)
            })
            
    },[])

    const data = {
        labels: chartData.map(d=>d.year),
        datasets: [
            {
                label:"Co2 ppm",
                data: chartData.filter(d=>d.co2>0).map(d=>d.co2),
                borderWidth: 2,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "co2",
                tension: 0.4,
                pointRadius: 1
            },
            {
                label:"Surface temperature change",
                data: chartData.map(d=>d.temp),
                borderWidth: 2,
                borderColor: "rgb(60, 179, 113)",
                backgroundColor: "rgba(60, 179, 113, 0.5)",
                yAxisID: "temp",
                tension: 0.4,
                pointRadius: 1,
            }
        ]
    }
    const options = {
        type:'line',
        responsive: true,
        interactions: {
            mode: 'index',
            intersect: false
        },
        stacked: false,
        plugins: {
            legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "V7",
          },
        },
        scales: {
          
            temp: {
                title:{
                    display: true,
                    text: "Surface temperature change"
                },
                type: "linear",
                display: true,
                position: "right",
                
                },
            co2: {
                title:{
                    display: true,
                    text: "Co2 ppm"
                },
                type: "linear",
                display: true,
                position: "left",
                grid: {
                    drawOnChartArea: false
                   }
           },
           x: {
            title:{
                display: true,
                text:"Kyr bp"
            }
           },
        },
    }

    return (
    <div style={{ width: "95%" }}>
        <Line data={data} options={options}/>
        <div>
            <p>
                Link to data source:
            </p>
            <p>
                Link to description of this graph:
            </p>
        </div>
    </div>
    );
};
