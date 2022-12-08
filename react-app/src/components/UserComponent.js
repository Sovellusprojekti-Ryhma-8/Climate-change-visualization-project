import { useEffect, useState } from "react";
import React from "react";
import CreateVisualization from "./LuoVisualisointinäkymä";
import V1 from "./V1";
import V2 from "./V2";
import V3 from "./V3";
import V4 from "./V4";
import V5 from "./V5";
import V6 from "./V6";
import V7 from "./V7";
import V8 from "./V8";


import { useParams } from "react-router";
import axios from "axios";

const URL = "http://localhost:8080/setView"

const UserComponent = (props) => {

    const [components, setComp] = useState([]);
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(10);
    // const [visuals, setVisuals] = useState([]);
    const [desc, setDesc] = useState([]);
    const Id = useParams()
    const form = new FormData;

    useEffect(() => {
        form.append("Id", Id.id)

        axios({
            method: 'post',
            url: URL,
            data: form,
        })
        .then((res) => {
            setData(res.data)
            // console.log(res.data)
            setCounter(1)                
        }).catch(error => {
            alert(error)
        })
        
    },[counter])

    if (counter < 2) {
        // console.log(data)
        // setComp(
        //     components => [...components, <V1/>]
        // )
        // setComp(
        //     components => [...components, <V2/>]
        // )
        const visuals = data.visualizations
        // const desc = data.descriptions
        // setVisuals(data.visualizations)

        visuals.forEach(element => {
            switch (element) {
                case "v1":
                    setComp(
                        components => [...components, <V1/>]
                    )
                    break;
                case "v2":
                    setComp(
                        components => [...components, <V2/>]
                    )
                    break;
                case "v3":
                    setComp(
                        components => [...components, <V3/>]
                    )
                    break;
                case "v4":
                    setComp(
                        components => [...components, <V4/>]
                    )
                    break;
                case "v5":
                    setComp(
                        components => [...components, <V5/>]
                    )                    
                    break;
                case "v6":
                    setComp(
                        components => [...components, <V6/>]
                    )
                    break;
                case "v7":                    
                    setComp(
                        components => [...components, <V7/>]
                    )
                    break; 
                case "v8":
                    setComp(
                        components => [...components, <V8/>]
                    )
                    break;
                // case "v9":
                //     setComp(<V9/>)
                //     break;           
                default:
                    break;
            }
        });

        console.log(visuals)
        console.log(desc)
        setCounter(counter+1)    
    }



    
    

    // console.log(Id.id)
    return (
        <>
        {components}
        </>
    )
}
export default UserComponent;

