import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'

const URL = 'http://localhost:8080/V4'

export default function V4() {
    const [de08, setDe08] = useState([]);
    const [de08_2, setDe08_02] = useState([]);
    const [dss, setDss] = useState([]);
    const [chartData, setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            console.log(res.data["DE08-2"])
            setDss(res.data.DSS)
            setDe08_02(res.data["DE08-2"])
            setDe08(res.data.DE08)
        }).catch(error => {
            alert(error)
        })
    },[])

    const data = {
        labels: dss.map(d => d.time),
        datasets: [
            {
                label:"DSS",
                data: dss,
                parsing:{
                    xAxisKey: "time",
                    yAxisKey: "co2"
                },
                borderWidth: 2,
                borderColor:  "rgb(60, 179, 113)",
                backgroundColor: "rgba(60, 179, 113, 0.5)",
                pointRadius: 1,
            },
            {
                label:"DE08-2",
                data: de08_2,
                parsing:{
                    xAxisKey: "time",
                    yAxisKey: "co2"
                },
                borderWidth: 2,
                borderColor:  "rgba(0, 0, 255)",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                pointRadius: 1,
            },
            {
                label:"DE08",
                data: de08,
                parsing:{
                    xAxisKey: "time",
                    yAxisKey: "co2"
                },
                borderWidth: 2,
                borderColor:  "rgba(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
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
                text: "V4",
            },
        },
        scales: {
            yAxis: {
                type: "linear",
                display: true,
                position: "right",
            },
        },
    }

  return (
    <div >
          <Line data={data} options={options}/>
          <div>
            <h4>Description</h4>
            <h4>Data source</h4>
            <a href="" target="_blank">Annual data source</a>
            <a href="" target="_blank">Monthly data source</a>
          </div>
    </div>
  )
}
