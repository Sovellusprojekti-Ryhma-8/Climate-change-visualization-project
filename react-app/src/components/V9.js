import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut, Pie } from "react-chartjs-2";
import {PieChart} from "recharts";



const URL = "http://localhost:8080/V9"

export default function V9() {
    const [chartData, setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setData(res.data)
        }).catch(error => {
            alert(error)
        })
    },[])

    const data = {
        labels: chartData.map(d => d.sector),
        datasets: [
            {
                label: "Co2",
                ID: "co2",
                data: chartData.map(d => d.co2),
                backgroundColor: [
                    'rgb(200,217,98)',
                    'rgb(113,224,187)',
                    'rgb(113,164,224)',
                    'rgb(190,81,232)',
                    'rgb(243,119,205)',
                    'rgb(245,69,111)',
                    'rgb(60,211,27)',
                    'rgb(167,49,8)'

                ],
                borderColor:'black',
                borderWidth: 0.5
            }
        ]
    }

    const options = {
        maintainAspectRatio: true,
        aspectRatio: 1,
        events: ['click'],
        tooltips: {
            callbacks: {
                
            }
        },
        plugins: {
            legend: {
                position: 'right',
                temsLayout: 'vertical'
            },
            title:{
                display: true,
                text:"CO2 emissions by sector"
            },
        }
        
    }

    return (
        <div style={{ width: "70%" }}>
            <Doughnut data={data} options={options}/>
        <div>
                
            </div>
        </div>
    )
}