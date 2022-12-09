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
    const [visuals, setVisuals] = useState([]);
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
            setVisuals(res.data.visualizations)
            setDesc(res.data.descriptions)
            setCounter(1)                
        }).catch(error => {
            alert(error)
        })
        
    },[counter])

    if (counter < 2) {
        
        visuals.forEach((element, index) => {

            switch (element) {
                case "v1":
                    if (visuals.length > components.length) {
                        setComp(
                            components => [...components, <V1 key={components.lenght} text={desc[index]}/>]
                        )
                    }
                    break;
                case "v2":
                    if (visuals.length > components.length) {
                    setComp(
                        components => [...components, <V2 key={components.lenght} text={desc[index]}/>]
                    )
                    }
                    break;
                case "v3":
                    if (visuals.length > components.length) {
                    setComp(
                        components => [...components, <V3 key={components.lenght} text={desc[index]}/>]
                    )
                    }
                    break;
                case "v4":
                    if (visuals.length > components.length) {
                    setComp(
                        components => [...components, <V4 key={components.lenght} text={desc[index]}/>]
                    )
                    }
                    break;
                case "v5":
                    if (visuals.length > components.length) {
                    setComp(
                        components => [...components, <V5 key={components.lenght} text={desc[index]}/>]
                    )
                    }                    
                    break;
                case "v6":
                    if (visuals.length > components.length) {
                    setComp(
                        components => [...components, <V6 key={components.lenght} text={desc[index]}/>]
                    )
                    }
                    break;
                case "v7":   
                if (visuals.length > components.length) {                 
                    setComp(
                        components => [...components, <V7 key={components.lenght} text={desc[index]}/>]
                    )
                }
                    break; 
                case "v8":
                    if (visuals.length > components.length) {
                    setComp(
                        components => [...components, <V8 key={components.lenght} text={desc[index]}/>]
                    )
                    }
                    break;
                // case "v9":
                //     setComp(<V9/>)
                //     break;           
                default:
                    break;
            }
        });
        setCounter(counter+1)    
    }
    
    return (
        <>
        {components}
        </>
    )
}
export default UserComponent;

