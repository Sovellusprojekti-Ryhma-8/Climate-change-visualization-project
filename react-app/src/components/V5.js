import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Colors from './Colors'

const URL = "http://localhost:8080/V5"

export default function V5(props) {
    const [chartData, setData] = useState([]);
    const [colors, setColors] = useState(Colors())
    const [text, setText] = useState("Graph displays Co2 measurements from Vostok station.");


    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setData(res.data)
            if (Object.keys(props.text).length > 0) {
                setText(props.text)
            }
        }).catch(error => {
            alert(error)
        })
    },[])

    const data = {
        labels: chartData.map(d => d.year-1950+"BC"),
        datasets: [
            {
                label: "Co2",
                data: chartData.map(d => d.co2),
                borderWidth: 2,
                borderColor: colors[0],
                backgroundColor: colors[0] + "50",
                pointRadius: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Vostok Ice Core Co2 measurements",
            },  
            subtitle: {
                display: true,
                text: text
            }    
        },
        scales: {
            yAxis: {
                type: "linear",
                display: true,
                position: "left",
                title: {
                    display: true,
                    text: "Co2"
                }
            },
            x: { 
                reverse: true,
                title: {
                    display: true,
                    text: "Year"
                }, 
                ticks: {
                    maxTicksLimit: 30
                }               
            }
        },
    }

    return (
        <div>
            <div class="chart">
                <Line data={data} options={options}/>
            </div>
            <div class="chartFooter">
                <p>
                    Learn more about <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank" rel="noreferrer">Vostok ice core measurements</a>.
                </p>
                <h4>Data source</h4>
                <p>
                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank" rel="noreferrer">Vostok Co2 measurements</a>
                </p>
            </div>
        </div>
    )
}