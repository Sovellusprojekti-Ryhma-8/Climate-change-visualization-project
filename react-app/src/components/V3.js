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
      datasets: [
        {
          label: "Annual mean co2",
          data: annualData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          pointRadius: 1,
          borderWidth: 2,
        },
        {
          label: "Monthly mean co2",
          data: monthlyData,
          borderColor: "rgb(60, 179, 113)",
          backgroundColor: "rgb(60, 179, 113, 0.5)",
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
            text: "CO2 measurements from Mauna Loa",
          },
          subtitle: {
            display: true,
            text: "This graph presents atmospheric carbon dioxide measurements annually and monthly from Mauna Loa Observatory in Hawaii"
        },
        },
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2"
        },
        interaction: {
          intersect: false,
          mode: "nearest",
          axis: "x",
        },
        scales: {
          x: {
            type: "time",
            title: {
              display: true,
              text: "Year",
            }
          },
          co2: {
            type: "linear",
            display: true,
            position: "right",
            title: {
              display: true,
              text: "CO2",
            }
          },
        },
    };

    

    return (
      <div >
          <Line data={data} options={options}/>
          <div>
            <p>
              Learn more of <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" target="_blank" rel="noreferrer">Mauna Loa</a> measurements
            </p>
            <h4>Data source</h4>
            <p>
              <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt" target="_blank" rel="noreferrer">Annual data source</a>, <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt" target="_blank" rel="noreferrer">Monthly data source</a>
            </p>
          </div>
      </div>
      
    );

}