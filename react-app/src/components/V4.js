import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'
import Colors from './Colors'

const URL = 'http://localhost:8080/V4'
const URL_V3_ANNUAL = 'http://localhost:8080/V3annual'
const URL_V3_MONTHLY = 'http://localhost:8080/V3monthly'
const URL_V10 = 'http://localhost:8080/V10'



export default function V4(props) {
    const [de08, setDe08] = useState([]);
    const [de08_2, setDe08_02] = useState([]);
    const [dss, setDss] = useState([]);
    const [v3annuadata, setV3annualdata] = useState([])
    const [v3monthlydata, setV3monthlydata] = useState([])
    const [v10data, setV10Data] = useState([])
    const [colors] = useState(Colors())
    const [text, setText] = useState("This graph presents carbon dioxide records from three ice cores (DSS, DE08-2, DE08) at Law Dome, East Antarctica and CO2 measurements monthly and annually from Mauna Loa, Hawaii.");


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
        axios.get(URL_V3_ANNUAL)
            .then((response) => {
              setV3annualdata(response.data)
            }).catch(error => {
              alert(error)
            })
        axios.get(URL_V3_MONTHLY)
        .then((response) => {
            setV3monthlydata(response.data)
            if (Object.keys(props.text).length > 0) {
                setText(props.text)
            }
        }).catch(error => {
            alert(error)
        })
        axios.get(URL_V10)
        .then((response) => {
            setV10Data(response.data)
        }).catch(error => {
            alert(error)
        })
    },[])

    const data = {
        datasets: [
            {
                label:"DSS Ice Core",
                data: dss,
                borderWidth: 2,
                borderColor: colors[0],
                backgroundColor: colors[0] + "50",
                pointRadius: 1,
            },
            {
                label:"DE08-2 Ice Core",
                data: de08_2,
                borderWidth: 2,
                borderColor: colors[1],
                backgroundColor: colors[1] + "50",
                pointRadius: 1,
            },
            {
                label:"DE08 Ice Core",
                data: de08,
                borderWidth: 2,
                borderColor: colors[2],
                backgroundColor: colors[2] + "50",
                pointRadius: 1,
            },
            {
                label:"Mauna Loa Annual CO2",
                data: v3annuadata,
                borderWidth: 2,
                borderColor: colors[3],
                backgroundColor: colors[3] + "50",
                pointRadius: 1,
            },
            {
                label:"Mauna Loa Monthly CO2",
                data: v3monthlydata,
                borderWidth: 2,
                borderColor: colors[4],
                backgroundColor: colors[4] + "50",
                pointRadius: 1,
            },
            {
                label: "Human evolution and activities",
                data: v10data.map(e => ({key: e.yr_bp, value: "0.7", event: e.events})),
                borderWidth: 2,
                showLine: false,
                borderColor: colors[5],
                backgroundColor: colors[5] + "50",
                parsing: {
                    xAxisKey: "key",
                    yAxisKey: "value"
                },
                xAxisID: "xV10",
                yAxisID: "yV10",
                pointRadius: 5,
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
                text: "Antarctic Ice Core CO2 records with Mauna Loa CO2 measurements",
            },
            subtitle: {
                display: true,
                text: text
            },
            tooltip: {  
                yAlign: 'bottom',
                callbacks: {
                    title: (e) => {
                        if(e[0].dataset.label === "Human evolution and activities"){
                            return e[0].raw.key + " years before present"
                        }else {

                            return e[0].label
                        }

                    },
                    label: (e) => {
                        if(e.dataset.label === "Human evolution and activities"){
                            return e.raw.event
                        }else {
                            return e.dataset.label + ": " + e.raw.co2
                        }
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: "nearest",
            axis: "xy",
        },
        parsing:{
            xAxisKey: "time",
            yAxisKey: "co2"
        },
        scales: {
            x: {
                type: "time",
                display: true,
                title: {
                    display: true,
                    text: "Year",
                },
                
            },
            xV10: {
                type: "logarithmic",
                reverse: true,
                display: true,
                title: {
                    display: true,
                    text: "Years before present",
                },
            },
            co2: {
                type: "linear",
                display: true,
                position: "left",
                title: {
                    display: true,
                    text: "CO2",
                }
            },
            yV10: {
                display: false,
                min: 0,
                max: 1,
                type: "linear",
            }
        },
    }

  return (
    <div >
        <div class="chart">
          <Line data={data} options={options}/>
        </div>
        <div class="chartFooter">
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
