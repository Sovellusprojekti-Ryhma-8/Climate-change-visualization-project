import React, { useEffect, useState } from "react";
import {Line} from "react-chartjs-2"
import axios from 'axios'

const URL1 = 'http://localhost:8080/V7'
const URL2 = 'http://localhost:8080/V10'

export default function V7() {
    const [chartData, setChartData] = useState([])
    const [eventData, setEventData] = useState([])
    

    useEffect(() => {
        axios.get(URL1)
            .then((response) => {
                setChartData(response.data)
            }).catch(error => {
                alert(error)
            })

        axios.get(URL2)
            .then((response) => {
                setEventData(response.data)
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
            },
            {
                label:"Events",
                data: eventData.map(d=>d.events),
                borderWidth: 2,
                borderColor: "rgb(255, 99, 132)", 
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "events",
                tension: 0.4,
                pointRadius: 1
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
            text: "Evolution of global temperature over the past two million years",
          },
          subtitle:{
            display: true,
            text:"Graph shows the evolution of global temperature over the past two million years and changes in Co2 concentration over the past 800 000 years"
        }
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
                },
        
                
           x: {
            reverse: true,
            title:{
                display: true,
                text:"Thousands of years before present"
            }
           },
        },
    }


    return (
        <div>
        <Line data={data} options={options}/>
        <div>
            <p>
                Learn more about <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf" target="_blank">measurements</a>.
            </p>
            <h4>Data source</h4>
            <p>
            <a href="http://carolynsnyder.com/publications.php" target="_blank">Temperature evolution</a>
            </p>
        </div>
    </div>
    )
};
