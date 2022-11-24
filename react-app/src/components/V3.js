import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'

const URL_annual = 'http://localhost:8080/V3annual'
const URL_monthly = 'http://localhost:8080/V3monthly'

export default function V3() {
    const [annualData, setAnnualData] = useState([])
    const [monthlyData, setMonthlyData] = useState([])
    const [chartData, setChartData] = useState([])

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
            text: "Atmospheric CO2 measurements from Mauna Loa",
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
      <div >
          <Line data={data} options={options}/>
          <div>
            <h4>Description</h4>
            <h4>Data source</h4>
            <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt" target="_blank">Annual data source</a>
            <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt" target="_blank">Monthly data source</a>
          </div>
      </div>
      
    );

}