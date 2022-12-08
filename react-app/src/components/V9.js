import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';


export default function V9() {
    const [chartData, setChartData] = useState([]);
    const [viewData, setInfoData] = useState([]);
    const [loading, setloading] = useState(true);

    const URL1 = "http://localhost:8080/V9_sector"
    const URL2 = "http://localhost:8080/V9_info"


    useEffect(() => {
      V9Chart()
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
                backgroundColor: 
                [
                  '#D8D829',
                    '#CA334E',
                    '#44CA33',
                    '#2DD9BC'
                ]
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
                backgroundColor: 
                [
                  '#D8D829',
                  '#CA334E',
                  '#44CA33',
                  '#2DD9BC'
                ]
              }
            ]
          }
        )
      }
    )
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

        setInfoData(e.chart.tooltip.dataPoints?.[0]?.label)
        if (e.chart.tooltip.dataPoints?.[0]?.label === "Energy") {
          axios.get(URL2)
            .then(res => {
              for (const Object of res.data) {
                if (Object.sector_info === "Iron & Steel" || Object.sector_info === "Chemical & petrochemical (energy)" || Object.sector_info === "Food and tobacco" 
                  || Object.sector_info === "Non-ferous metals" || Object.sector_info === "Paper. pulp & printing" || Object.sector_info === "Machinery" 
                  || Object.sector_info === "Aviation" || Object.sector_info === "Ship" || Object.sector_info === "Rail" || Object.sector_info === "Road" 
                  || Object.sector_info === "Pipeline" || Object.sector_info === "Residential" || Object.sector_info === "Commercial"  
                  || Object.sector_info === "Energy in Agri and Fishing" || Object.sector_info === "Oil and Natural Gas" || Object.sector_info === "Coal"
                  || Object.sector_info === "Other industry" || Object.sector_info === "Unallocated fuel combustion") 
                  {
                  info.push(Object.sector_info)
                  co2.push(Object.co2)
                  }
                }
              setChartData({
                labels: info,
                datasets: [
                  {
                  data: co2,
                  backgroundColor: 
                  [
                    '#D8D829',
                    '#CA334E',
                    '#44CA33',
                    '#2DD9BC',
                    '#5FB237',
                    '#37B28B',
                    '#B24D37',
                    '#3837B2',
                    '#37B0B2',
                    '#B237B0',
                    '#9237B2',
                    '#BAA233',
                    '#BA334B',
                    '#B2BA33',
                    '#73BA33',
                    '#3BD92D'
                  ]
                }
              ]
            }
          )
        }
      )
    }else if (e.chart.tooltip.dataPoints?.[0]?.label === "Industrial processes") {
          axios.get(URL2)
            .then(res => {
              for (const Object of res.data) {
                if (Object.sector_info === "Cement" || Object.sector_info === "Chemical & petrochemical (industrial)") 
                  {
                  info.push(Object.sector_info)
                  co2.push(Object.co2)
                  }
                }
                setChartData({
                  labels: info,
                  datasets: [
                    {
                    data: co2,
                    backgroundColor: 
                    [
                      '#D8D829',
                      '#CA334E',
                    ]
                  }
                ]
              }
            )
          }
        )
      }else if(e.chart.tooltip.dataPoints?.[0]?.label === "Waste") {
        axios.get(URL2)
          .then(res => {
            for (const Object of res.data) {
              if (Object.sector_info === "Wastewater" || Object.sector_info === "Landfills") 
                {
                  info.push(Object.sector_info)
                  co2.push(Object.co2)
                }
      
              }
              setChartData({
                labels: info,
                datasets: [
                  {
                  data: co2,
                  backgroundColor: 
                  [
                    '#D8D829',
                    '#CA334E',
                  ]
                }
              ]
            }
          )
        }
      )
    }else if (e.chart.tooltip.dataPoints?.[0]?.label === "Agriculture, Forestry & Land Use (AFOLU)") {
      axios.get(URL2)
        .then(res => {
          for (const Object of res.data) {
            if (Object.sector_info === "Grassland" || Object.sector_info === "Cropland" || Object.sector_info === "Crop Burning" || Object.sector_info === "Forest Land"
            || Object.sector_info === "Rice cultivation" || Object.sector_info === "Agricultural soils" || Object.sector_info === "Livestock & Manure") 
            {
            info.push(Object.sector_info)
            co2.push(Object.co2)
            }

        }
        setChartData({
          labels: info,
          datasets: [
            {
            data: co2,
            backgroundColor: 
            [
              '#D8D829',
              '#CA334E',
              '#44CA33',
              '#2DD9BC',
              '#5FB237',
              '#37B28B'
            ]
          }
        ]
      }
    )
  }
)
}
}

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
              position: 'right',
              temsLayout: 'vertical'
            },
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
      <div>
        <Doughnut data={chartData} options={options}/>
          <form onSubmit={e => Back(e)}>
            <button> Back </button>
          </form>
            <p>
               Click on a sector to get a breakdown of the sector, click back to get back to main graph.
            </p>
            <p>
                Learn more about <a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector" target="_blank">measurements</a>.
            </p>
            <h4>Data source</h4>
            <p>
            <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx" target="_blank">Co2 emissions</a>
            </p>
    </div>
    )

}