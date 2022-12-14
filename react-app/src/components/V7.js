import React, { useEffect, useState } from "react";
import {Line} from "react-chartjs-2"
import axios from 'axios'
import Colors from './Colors'

//URL-links for fetching data from the database
const URL1 = 'http://localhost:8080/V7'
const URL2 = 'http://localhost:8080/V10'


export default function V7(props) {
    //Constants for data
    const [chartData, setChartData] = useState([])
    const [colors, setColors] = useState(Colors())
    const [text, setText] = useState(["Graph shows the evolution of global temperature over the past two million years", "and changes in Co2 Concentration over the past 800 000 years"]);

    const [eventData, setEventData] = useState([])


    //Fetching the data
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

    //Creating charts out of fetched data
    const data = {
        labels: chartData.map(d=>d.kyr_bp),
        datasets: [
            {
                label:"Co2",
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
                label:"Activities",
                data: eventData.map(d=>({key: d.kyr_bp, value: "0.7", event: d.events})),
                borderWidth: 2,
                borderColor: colors[2],
                backgroundColor: colors[2] + "50",
                parsing:{
                    xAxisKey: "key",
                    yAxisKey: "value"
                },
                yAxisID: "yv10",
                xAxisID: "xv10",
                pointRadius: 7,
                showLine: false
            }
        ]
    }
    //Options for the charts
    const options = {
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
        },
        tooltip:{
            yAlign: 'bottom',
            callbacks: {
                title: (e) => {
                    if(e[0].dataset.label === "Activities"){
                        return e[0].raw.key + " thousand years before present"
                  }else {
                        return e[0].label
                  }
                },
                label: (e) => {
                    console.log(e)
                    if(e.dataset.label === "Activities"){
                        return e.raw.event
                  }else {
                        return e.dataset.label + ": "+e.raw
                  }
                }
            }
        }
        },
        scales: {
            temp: {
                title:{
                    display: true,
                    text: "Surface temperature change C°"
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
            xv10:{
              type:"linear",
              reverse: true,
              display: true,
              title:{
                display: true,
                text:"Thousands of years before present"
              }
            },    
             yv10:{
                display: false,
                type:"linear"
            }, 
        }
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
