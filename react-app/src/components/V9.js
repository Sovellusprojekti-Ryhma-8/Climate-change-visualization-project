import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";



const URL = "http://localhost:8080/V9_sector"

export default function V9() {
    const [chartData, setData] = useState([]);
    const [viewData, setViewData] = useState([]);
    const [V9Data, setV9Data] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
      V9Chart()
    },[])

     const V9Chart = () => {
        let co2 = []
        let sector = []
    
        axios.get("http://localhost:8080/V9_sector")
          .then(response => {
            for (const dataObj of response.data) {
              sector.push(dataObj.sector)
              co2.push(dataObj.co2)
            }
            setV9Data({
              labels: sector,
              datasets: [{
                data: co2,
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)',
                  'rgb(105, 25, 10)'
                ]
              }]
            })
            setloading(false)
          })
    
      }

      
 
    /* useEffect(() => {
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
                    'rgb(102, 255, 153)',
                    'rgb(51, 204, 255)',
                    'rgb(255, 102, 102)',
                    'rgb(255, 204, 102)'

                ],
                borderColor:'black',
                borderWidth: 0.5
            }
        ]
    } */

   function Detail (e){
        const co2 = []
        const info = []
        setViewData(e.chart.tooltip.dataPoints?.[0]?.label)
        if (e.chart.tooltip.dataPoints?.[0]?.label === "Energy") {
          axios.get("http://localhost:8080/V9_info")
            .then(response => {
              for (const dataObj of response.data) {
                if (dataObj.sector_info === "Iron & Steel" || dataObj.sector_info === "Chemical & petrochemical (energy)" || dataObj.sector_info === "Food and tobacco" 
                  || dataObj.sector_info === "Non-ferous metals" || dataObj.sector_info === "Paper. pulp & printing" || dataObj.sector_info === "Machinery" 
                  || dataObj.sector_info === "Aviation" || dataObj.sector_info === "Ship" || dataObj.sector_info === "Rail" || dataObj.sector_info === "Road" 
                  || dataObj.sector_info === "Pipeline" || dataObj.sector_info === "Residential" || dataObj.sector_info === "Commercial"  
                  || dataObj.sector_info === "Energy in Agri and Fishing" || dataObj.sector_info === "Oil and Natural Gas" || dataObj.sector_info === "Coal"
                  || dataObj.sector_info === "Other industry" || dataObj.sector_info === "Unallocated fuel combustion") {
                  info.push(dataObj.sector_info)
                  co2.push(dataObj.co2)
                }
    
              }
              setV9Data({
                labels: info,
                datasets: [{
                  data: co2,
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(105, 205, 10)',
                    'rgb(105, 25, 100)'
                    
                  ]
                }]
              })
            })
        }else if (e.chart.tooltip.dataPoints?.[0]?.label === "Industrial processes") {
            axios.get("http://localhost:8080/V9_info")
              .then(response => {
                for (const dataObj of response.data) {
                  if (dataObj.sector_info === "Cement" || dataObj.sector_info === "Chemical & petrochemical (industrial)") {
                    info.push(dataObj.sector_info)
                    co2.push(dataObj.co2)
                  }
      
                }
                setV9Data({
                  labels: info,
                  datasets: [{
                    data: co2,
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)'
                    ]
                  }]
                })
              })
        }else if(e.chart.tooltip.dataPoints?.[0]?.label === "Waste") {
          axios.get("http://localhost:8080/V9_info")
            .then(response => {
              for (const dataObj of response.data) {
                if (dataObj.sector_info === "Wastewater" || dataObj.sector_info === "Landfills") {
                  info.push(dataObj.sector_info)
                  co2.push(dataObj.co2)
                }
      
              }
              setV9Data({
                labels: info,
                datasets: [{
                  data: co2,
                  backgroundColor: [
                    'rgb(255, 205, 86)',
                    'rgb(255, 205, 200)'
                  ]
                }]
              })
            })
        
   }else if (e.chart.tooltip.dataPoints?.[0]?.label === "Agriculture, Forestry & Land Use (AFOLU)") {
    axios.get("http://localhost:8080/V9_info")
      .then(response => {
        for (const dataObj of response.data) {
          if (dataObj.sector_info === "Grassland" || dataObj.sector_info === "Cropland" || dataObj.sector_info === "Crop Burning" || dataObj.sector_info === "Forest Land"
            || dataObj.sector_info === "Rice cultivation" || dataObj.sector_info === "Agricultural soils" || dataObj.sector_info === "Livestock & Manure") {
            info.push(dataObj.sector_info)
            co2.push(dataObj.co2)
          }

        }
        setV9Data({
          labels: info,
          datasets: [{
            data: co2,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(105, 205, 10)',
              'rgb(105, 25, 100)',
              'rgb(155, 250, 10)',
              'rgb(155, 250, 200)'
            ]
          }]
        })
      })
    }
   }

   function Back(e) {
    e.preventDefault();
    let co2 = []
    let sector = []
      axios.get("http://localhost:8080/V9_sector")
          .then(response => {
            for (const dataObj of response.data) {
              sector.push(dataObj.sector)
              co2.push(dataObj.co2)
            }
            setV9Data({
              labels: sector,
              datasets: [{
                data: co2,
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)',
                  'rgb(105, 25, 10)'
                ]
              }]
            })})} 

    const options = {
        type: 'doughnut',
        maintainAspectRatio: true,
        responsive: true,
        aspectRatio: 1,
         onClick: (e) => {
            Detail(e)
          }, 
        plugins: {
            legend: {
                position: 'left',
                temsLayout: 'vertical'
            },
            title:{
                display: true,
                text:"CO2 emissions by sector"
            },
        }
        
    }

    if (loading === true) {
      return("")
    }

    return (
      <div style={{ width: "50%" }}>
        <Doughnut data={V9Data} options={options}/>
        <div>
          <form onSubmit={e => Back(e)}>
            <button> Back </button>
          </form>
            <p>
                Link to description of this graph:
            </p>
        </div>
    </div>
    )

}