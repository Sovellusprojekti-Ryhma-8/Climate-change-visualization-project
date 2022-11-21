import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'
import '../styles/V3_annual.css'

const URL_annual = 'http://localhost:8080/V3annual'
const URL_monthly = 'http://localhost:8080/V3monthly'

export default function V3_annual() {
    const [annualData, setAnnualData] = useState([])
    const [monthlyData, setMonthlyData] = useState([])

    useEffect(() => {
        axios.get(URL_annual)
            .then((response) => {
              setAnnualData(response.data)
              console.log(annualData)
            }).catch(error => {
              alert(error)
            })
        axios.get(URL_monthly)
            .then((response) => {
              setMonthlyData(response.data)
            }).catch(error => {
              alert(error)
            })
            
    },[])

    const data = {
      labels: monthlyData.map(d => d.time),
      //labels: annualData.map(d => d.time), 
      datasets: [
        {
          label: "Annual mean co2",
          data: annualData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          yAxisID: "co2",
          parsing: {
            xAxisKey: "time",
            yAxisKey: "co2",
          },
          pointRadius: 1,
          borderWidth: 2
        },
        {
          label: "Monthly mean co2",
          data: monthlyData,
          borderColor: "rgb(60, 179, 113)",
          backgroundColor: "rgb(60, 179, 113, 0.5)",
          
          parsing: {
            xAxisKey: "time",
            yAxisKey: "co2"
          },
          pointRadius: 1,
          borderWidth: 2
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
    <div id="container">
        <Line data={data} options={options}/>
    </div>
    );

}