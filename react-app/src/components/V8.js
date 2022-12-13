import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'
import Colors from './Colors'
const URL_V8 = "http://localhost:8080/V8"


export default function V8(props) {
    const [chartData, setChartData] = useState([])
    const [colors, setColors] = useState(Colors())
    const [text, setText] = useState("Graph presents carbondioxide emissions by country from year 1959 to 2020");

    let colorPicker = 0


    useEffect(() => {
        axios.get(URL_V8)
        .then((res) => {
            setChartData(res.data)
            if (Object.keys(props.text).length > 0) {
                setText(props.text)
            }
        }).catch(error => {
            alert(error)
        })
    },[])

    const getColor = () => {
        const color = colors[colorPicker]
        colorPicker++
        if(colorPicker == colors.length){
            colorPicker = 0
        }

        return color
    };

    const setupDatasets = (data) =>{
        const results = Object.keys(data).map(value => {
            return {
                label: value,
                data: data[value],
                borderWidth: 2,
                borderColor: getColor(),
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
                text: "CO2 Emission by country",
            },
            subtitle: {
                display: true,
                text: text
            },            
        },
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
                <a href='https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021' target="_blank" rel="noreferrer">Global Carbon Project.</a> (2021). Supplemental data of Global Carbon Budget 2021 (Version 1.0)
            </p>
            <h4>Data Source</h4>
            <p>
                <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D" target="_blank" rel='noreferrer'>National Emissions (xlsx)</a>
            </p>
          </div>
    </div>
  )
}
