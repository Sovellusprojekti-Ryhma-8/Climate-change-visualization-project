import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'
import { Colors } from 'chart.js'

const URL = 'http://localhost:8080/V4'
const URL_V3_ANNUAL = 'http://localhost:8080/V3annual'
const URL_V3_MONTHLY = 'http://localhost:8080/V3monthly'
const URL_annual = "http://localhost:8080/V1annual"
const URL_V8 = "http://localhost:8080/V8"


export default function V4() {
    const [chartData, setChartData] = useState([])


    useEffect(() => {
        axios.get(URL_V8)
        .then((res) => {
            setChartData(res.data)
        }).catch(error => {
            alert(error)
        })
    },[])

    const setupDatasets = (data) =>{
        const results = Object.keys(data).map(value => {
            return {
                label: value,
                data: data[value],
                borderWidth: 2,
                pointRadius: 0,   
            }
        })
        console.log(results)
        return results
    } 

    const data = {
        datasets: [] = setupDatasets(chartData)
    }
    

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    boxWidth: 10,
                },
                align: "center"
            },
            title: {
                display: true,
                text: "V8",
            },
            subtitle: {
                display: true,
                text: ""
            },            
        },
        borderColor: [
            "red",
            'blue',
            'green'
        ],
        interaction: {
            intersect: false,
            mode: "point",
        },
        parsing:{
            xAxisKey: "year",
            yAxisKey: "co2"
        },
        scales: {
            x: {
                type: "time",
                display: true,
                title: {
                    display: true,
                    text: "Year",
                    color: "" //Tähän joku väri?
                }
            },
            co2: {
                stacked: true,
                type: "linear",
                display: true,
                position: "left",
                title: {
                    display: true,
                    text: "CO2",
                    color: "" //Tähän joku väri?
                }
            },
        },
    }

    
    
    return (
        <div >
          <Line data={data} options={options}/>
          <div>
            <p>
                Learn more about <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html' target="_blank" rel="noreferrer">Law Dome</a> or <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html' target="_blank" rel="noreferrer"> Mauna Loa</a> measurements.
            </p>
            <h4>Data Source</h4>
            <p>
                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank" rel='noreferrer'>Law Dome</a>, <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt" target="_blank" rel="noreferrer">Mauna Loa Annual</a>, <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt" target="_blank" rel="noreferrer">Mauna Loa Monthly</a>.
            </p>
          </div>
    </div>
  )
}
