import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Colors from "./Colors";


export default function V9(props) {
    const [chartData, setChartData] = useState([]);
    const [infodata, setInfoData] = useState([]);
    const [loading, setloading] = useState(true);
    const [text, setText] = useState("Doughnut chart presenting the Co2 emissions by sectors");

    const [colors] = useState(Colors())

    const URL1 = "http://localhost:8080/V9_sector"
    const URL2 = "http://localhost:8080/V9_info"

    useEffect(() => {
      V9Chart()
      if (Object.keys(props.text).length > 0) {
        setText(props.text)
    }
    },[])

    const V9Chart = () => {
      const co2 = []
      const sector = [] 
    
        axios.get(URL1)
          .then(res => {
            for (const Object of res.data) 
            {
              sector.push(Object.sector)
              co2.push(Object.co2)
            }
            setChartData(
              {
              labels: sector,
              datasets: [
                {
                data: co2,
                borderWidth: 0.5,
                backgroundColor: colors
              }
            ]
          }
        )
         setloading(false)
      }
    )
  }

  while (loading === true) {
    return(null)
  } 

  function Back(e) {
    e.preventDefault();
    V9Chart();
  } 

  function Info (e){

    let co2 = []
    let info = []
    
    const EnergyInfo = ["Iron & Steel","Chemical & petrochemical (energy)","Food and tobacco","Non-ferous metals"
    ,"Paper. pulp & printing","Machinery" ,"Aviation","Ship","Rail","Road" ,"Pipeline","Residential","Commercial"  
    ,"Energy in Agri and Fishing","Oil and Natural Gas","Coal","Other industry","Unallocated fuel combustion"]
    const IndustrialInfo = ["Cement","Chemical & petrochemical (industrial)"]
    const WasteInfo = ["Wastewater","Landfills"]
    const AgriInfo = ["Grassland","Cropland","Crop Burning","Forest Land","Rice cultivation","Agricultural soils","Livestock & Manure"]
    
     setInfoData()
     axios.get(URL2)
        .then(res => {
          for (const Object of res.data) {
            if ((e.chart.tooltip.dataPoints?.[0]?.label === "Energy" && EnergyInfo.includes(Object.sector_info)) || (e.chart.tooltip.dataPoints?.[0]?.label === "Industrial processes" && IndustrialInfo.includes(Object.sector_info)) ||
                (e.chart.tooltip.dataPoints?.[0]?.label === "Waste" && WasteInfo.includes(Object.sector_info)) || (e.chart.tooltip.dataPoints?.[0]?.label === "Agriculture, Forestry & Land Use (AFOLU)" && AgriInfo.includes(Object.sector_info)))
              {
                console.log(e.chart.tooltip.dataPoints?.[0]?.label)
                info.push(Object.sector_info);
                co2.push(Object.co2);
              }
          }

          setChartData({
            labels: info,
            datasets: [
              {
                data: co2,
                backgroundColor: colors
              }
            ]
          });
        });
    }

    const options = {
        type: 'doughnut',
        maintainAspectRatio: true,
        responsive: true,
        aspectRatio: 1,
        onClick: (e) => {
            Info(e)
          }, 
        plugins: {
            title:{
              display: true,
              text:"Co2 emissions by sectors"
            },
            subtitle:{
              display: true,
              text: text
            }
        }
    }


    return (
      <div class="v9chart" >
        <div class="doughnut">
          <Doughnut data={chartData} options={options}/>
        </div>
        <div class="v9footer">
          <p>
            Click on one of the four sectors to get more information about individual factors.
          </p>
          <p>
            Click back to get back to main graph.
          </p>
          <p>
            Learn more about <a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector" target="_blank" rel='noreferrer'>measurements</a>.
          </p>
          <h4>Data source(downloads excel file)</h4>
          <p>
          <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx" target="_blank" rel='noreferrer'>Co2 emissions</a>
          </p>
          <form onSubmit={e => Back(e)}>
            <button> Back </button>
          </form>
        </div>
      </div>
    )

}