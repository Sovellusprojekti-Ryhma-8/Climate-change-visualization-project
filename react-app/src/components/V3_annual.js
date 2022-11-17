import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'

const URL = 'http://localhost:8080/V3annual'

export default function V3_annual() {
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
        labels: chartData.map(d => d.year),
        datasets: [
            {
                data: chartData.map(d => d.co2),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "co2",
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
            text: "V3",
          },
        },
        scales: {
          co2: {
            type: "linear",
            display: true,
            position: "right",
          },
        },
      };

    return (
    <div style={{ width: "1000px" }}>
        <Line data={data} options={options}/>
    </div>
    );

}