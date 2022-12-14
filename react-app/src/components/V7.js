import React, { useEffect, useState } from "react";
import {Line} from "react-chartjs-2"
import axios from 'axios'
import Colors from './Colors'

const URL1 = 'http://localhost:8080/V7'
const URL2 = 'http://localhost:8080/V10'

export default function V7(props) {
    const [chartData, setChartData] = useState([])
    const [colors, setColors] = useState(Colors())
    const [text, setText] = useState(["Graph shows the evolution of global temperature over the past two million years", "and changes in Co2 Concentration over the past 800 000 years"]);

    const [eventData, setEventData] = useState([])


    useEffect(() => {
        axios.get(URL1)
            .then((response) => {
                setChartData(response.data)
                if (Object.keys(props.text).length > 0) {
                    setText(props.text)
                }
            }).catch(error => {
                alert(error)
            })
        axios.get(URL2)
            .then((response) => {
                setEventData(response.data)
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
                borderColor: colors[0],
                backgroundColor: colors[0] + "50",
                yAxisID: "co2",
                tension: 0.4,
                pointRadius: 1
            },
            {
                label:"Surface temperature change",
                data: chartData.map(d=>d.temp),
                borderWidth: 2,
                borderColor: colors[1],
                backgroundColor: colors[1] + "50",
                yAxisID: "temp",
                tension: 0.4,
                pointRadius: 1,
            },
            {
                label:"Events",
                data: eventData.map(d=>d.events),
                borderWidth: 2,
                borderColor: colors[2],
                backgroundColor: colors[2] + "50",
                yAxisID: "events",
                tension: 0.4,
                pointRadius: 1
            }
        ]
    }
        
    const options = {
        tooltip:{
            enabled: true,
            callbacks: {
                title: function(context) {
                    
                  },
                label: function(context){
                    
                  }
            }
        
        },
        type:'line',
        responsive: true,
        maintainAspectRatio: false,
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
          subtitle: {
            display: true,
            text: text
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
            events: {
                display: false,
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
                display: true,
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
        <div class="chart">
            <Line data={data} options={options}/>
        </div>
        <div class="chartFooter">
            <p>
                Learn more about <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf" target="_blank" rel='noreferrer'>measurements</a>.
            </p>
            <h4>Data source</h4>
            <p>
            <a href="http://carolynsnyder.com/publications.php" target="_blank" rel='noreferrer'>Temperature evolution</a>
            </p>
        </div>
    </div>

    )
};
