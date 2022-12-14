import React from "react";
import {
     useState,
     useEffect,
    } from "react";
import Chart from "chart.js/auto";
import {Line } from "react-chartjs-2";
import axios from "axios";
import 'chartjs-adapter-moment';
import Colors from './Colors'


const URL_annual = "http://localhost:8080/V1annual"
const URL_monthly = "http://localhost:8080/V1monthly"
const URL_V2 = "http://localhost:8080/V2"

export default function V1(props) {
    const [annualData, setAnnualData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [v2Data, setV2data] = useState([]);
    const [display1, setDisplay1] = useState(true);
    const [display2, setDisplay2] = useState(false);
    const [btnState, setState] = useState(false);
    const [counter, setCounter] = useState(0);
    const [colors] = useState(Colors())
    const [text, setText] = useState("");

    
    
    let handleClick = () => {
        setState(!btnState);
        console.log(btnState);
        if (btnState) {
            setData(data)
            setDisplay1(true)
            setDisplay2(false)
        }else {
            setData(data1)
            setDisplay1(false)
            setDisplay2(true)
        }
    }
    

    useEffect(() => {

        axios.get(URL_annual)
        .then((res) => {
            setAnnualData(res.data)
        }).catch(error => {
            alert(error)
        })

        axios.get(URL_monthly)
        .then((res) => {
            setMonthlyData(res.data)
        }).catch(error => {
            alert(error)
        })

        axios.get(URL_V2)
        .then((res) => {
            setV2data(res.data)
            setCounter(0)
            if (Object.keys(props.text).length > 0) {
                setText(props.text)
            }
        }).catch(error => {
            alert(error)
        })

    },[])



    const data = {

        datasets: [
            {
                label:"Global Annual",
                data: annualData,
                borderWidth: 2,
                borderColor: colors[0],
                backgroundColor: colors[0] + "50",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "global",
                },
                pointRadius: 1,
            },
            {
                label:"Northern Hemisphere Annual",
                data: annualData,
                borderWidth: 2,
                borderColor: colors[1],
                backgroundColor: colors[1] + "50",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "northern",
                },
                pointRadius: 1,
            },
            {
                label:"Southern Hemisphere Annual",
                data: annualData,
                borderWidth: 2,
                borderColor: colors[2],
                backgroundColor: colors[2] + "50",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "southern",
                },
                pointRadius: 1,
            },
            {
                label:"Global Monthly",
                data: monthlyData,
                borderWidth: 2,
                borderColor: colors[3],
                backgroundColor: colors[3] + "50",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "global",
                },
                pointRadius: 1,
            },
            {
                label:"Northern Hemisphere Monthly",
                data: monthlyData,
                borderWidth: 2,
                borderColor: colors[4],
                backgroundColor: colors[4] + "50",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "northern",
                },
                pointRadius: 1,
            },
            {
                label:"Southern Hemisphere Monthly",
                data: monthlyData,
                borderWidth: 2,
                borderColor: colors[5],
                backgroundColor: colors[5] + "50",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "southern",
                },
                pointRadius: 1,
            }
        ]
    }

    const data1 = {
        datasets: [
            {
                label:"2000 Year Temperatures",
                data: v2Data,
                borderWidth: 2,
                borderColor: colors[0],
                backgroundColor: colors[0] + "50",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "temp",
                },
                xAxisID: "xAxis",
                pointRadius: 1,
            },
            {
                label:"Global Annual",
                data: annualData,
                borderWidth: 2,
                borderColor: colors[1],
                backgroundColor: colors[1] + "50",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "global",
                },
                xAxisID: "xAxis",
                pointRadius: 1,
            },
            {
                label:"Northern Hemisphere Annual",
                data: annualData,
                borderWidth: 2,
                borderColor: colors[2],
                backgroundColor: colors[2] + "50",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "northern",
                },
                xAxisID: "xAxis",
                pointRadius: 1,
            },
            {
                label:"Southern Hemisphere Annual",
                data: annualData,
                borderWidth: 2,
                borderColor: colors[3],
                backgroundColor: colors[3] + "50",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "southern",
                },
                xAxisID: "xAxis",
                pointRadius: 1,
            },
            {
                label:"Global Monthly",
                data: monthlyData,
                borderWidth: 2,
                borderColor: colors[4],
                backgroundColor: colors[4] + "50",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "global",
                },
                pointRadius: 1,
            },
            {
                label:"Northern Hemisphere Monthly",
                data: monthlyData,
                borderWidth: 2,
                borderColor: colors[5],
                backgroundColor: colors[5] + "50",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "northern",
                },
                pointRadius: 1,
            },
            {
                label:"Southern Hemisphere Monthly",
                data: monthlyData,
                borderWidth: 2,
                bborderColor: colors[6],
                backgroundColor: colors[6] + "50",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "southern",
                },
                pointRadius: 1,
            },

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
                text: "Global surface temperature anomalies",
            },
            subtitle: {
                display: true,
                text: text
            }
        },
        scales: {
            x: {
                type: 'time',
                display: display1,
                time: {
                    unit: "month",
                    stepSize: 5,
                },
            },
            xAxis: {
                display: display2,
            },
            yAxis: {
                type: "linear",
                display: true,
                position: "left",
                title: {
                    display: true,
                    text: "K"
                }
            },
        },
    };

    const [chartData, setData] = useState(data);
    
    if (counter < 1) {
        setData(data);
        setCounter(1);
    }
    
   

    return (
        <div>
            <div class="chart">
                <Line data={chartData} options={options}/>
            </div>
            <div class="chartFooter">
                <input type="checkbox" onClick={handleClick}/>
                <span style={{fontSize:14}}>2000 Year Temperatures</span>
                <h4>Data source</h4>
                <p>
                    <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html " target="_blank" rel="noreferrer">Surface temperatures</a>, <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt" target="_blank">2000 year temperatures</a>
                </p>
            </div>
        </div>
    )
}