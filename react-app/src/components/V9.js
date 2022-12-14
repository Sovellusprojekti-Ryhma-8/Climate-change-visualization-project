import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Colors from './Colors'


export default function V9() {
    //Constants for data and URLs
    const [chartData, setChartData] = useState([]);
    const [loading, setloading] = useState(true);
    const [colors] = useState(Colors())

    const URL1 = "http://localhost:8080/V9_sector"
    const URL2 = "http://localhost:8080/V9_info"

    useEffect(() => {
      V9Chart()
    },[])

    //Fetching the data for main chart and creating the main chart
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

  //Function for back-button, that takes you back to the main chart, pushing back the data from V9Chart
  function Back(e) {
    e.preventDefault();
    V9Chart();
  } 

  //Function for creating a new chart from the additionak info of selected sector
   function Info (e) {

        const co2 = []
        const info = []

        //Arrays, that will be turned into charts
        const EnergyInfo = ["Iron & Steel","Chemical & petrochemical (energy)","Food and tobacco","Non-ferous metals"
        ,"Paper. pulp & printing","Machinery" ,"Aviation","Ship","Rail","Road" ,"Pipeline","Residential","Commercial"  
        ,"Energy in Agri and Fishing","Oil and Natural Gas","Coal","Other industry","Unallocated fuel combustion"]
        const IndustrialInfo = ["Cement","Chemical & petrochemical (industrial)"]
        const WasteInfo = ["Wastewater","Landfills"]
        const AgriInfo = ["Grassland","Cropland","Crop Burning","Forest Land","Rice cultivation","Agricultural soils","Livestock & Manure"]

    axios.get(URL2)
      .then(res => {
        for (const Object of res.data) {
          //If you click on the "Energy" sector in the doughnut chart, data from EnergyInfo-array will be pushed to the chartData, 
          //that previously held the data for main chart
          if (e.chart.tooltip.dataPoints?.[0]?.label === "Energy") {
               if(EnergyInfo.includes(Object.sector_info))
                  {
                  info.push(Object.sector_info);
                  co2.push(Object.co2);
                  }
                  setChartData({
                    labels: info,
                    datasets: [
                      {
                        data: co2,
                        backgroundColor: colors
                      }
                    ]
                  })
      }else if(e.chart.tooltip.dataPoints?.[0]?.label === "Industrial processes") {
                if(IndustrialInfo.includes(Object.sector_info))
                  {
                  info.push(Object.sector_info);
                  co2.push(Object.co2);
                  }
                  setChartData({
                    labels: info,
                    datasets: [
                      { 
                        data: co2,
                        backgroundColor: colors
                      }
                    ]
                  })
      }else if(e.chart.tooltip.dataPoints?.[0]?.label === "Waste") {
                if(WasteInfo.includes(Object.sector_info))
                  {
                  info.push(Object.sector_info);
                  co2.push(Object.co2);
                  }
                  setChartData({
                    labels: info,
                    datasets: [
                      {
                        data: co2,
                        backgroundColor: colors
                      }
                    ]
                  })
      }else if(e.chart.tooltip.dataPoints?.[0]?.label === "Agriculture, Forestry & Land Use (AFOLU)") {
                if(AgriInfo.includes(Object.sector_info))
                  {
                  info.push(Object.sector_info);
                  co2.push(Object.co2);
                  }
                  setChartData({
                    labels: info,
                    datasets: [
                      {
                        data: co2,
                        backgroundColor: colors
                      }
                    ]
                  })
                }}
            })};
    
    //Options for the chart
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
              text:"Doughnut chart presenting the Co2 emissions by sectors"
            }
        }  
    }


    return (
      <>
      <div style={{width: '700px', position:'relative',display:'flex'}}>
        <Doughnut data={chartData} options={options}/>
          <div style={{paddingTop:'170px'}}>
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
            <form style={{paddingTop:'120px'}} onSubmit={e => Back(e)}>
            <button> Back </button>
          </form>
        </div>
      </div>
    </>
    )

}