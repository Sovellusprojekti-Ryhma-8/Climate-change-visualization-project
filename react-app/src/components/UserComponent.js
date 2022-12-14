import { useEffect, useState } from "react";
import React from "react";
import V1 from "./V1";
import V2 from "./V2";
import V3 from "./V3";
import V4 from "./V4";
import V5 from "./V5";
import V6 from "./V6";
import V7 from "./V7";
import V8 from "./V8";
import V9 from "./V9";

import { useParams } from "react-router";
import axios from "axios";


const URL = "http://localhost:8080/setView"

const UserComponent = (props) => {

    const [components, setComp] = useState([]);
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(10);
    const [visuals, setVisuals] = useState([]);
    const [desc, setDesc] = useState([]);
    const [style, setStyle] = useState(0);
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
            setStyle(res.data.style)
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
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V1 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                        setComp(
                            components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V1 key={components.lenght} text={desc[index]}/></li>]
                        )
                        }
                    }
                    break;
                case "v2":
                    if (visuals.length > components.length) {
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V2 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                    setComp(
                        components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V2 key={components.lenght} text={desc[index]}/></li>]
                    )
                    }}
                    break;
                case "v3":
                    if (visuals.length > components.length) {
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V3 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                    setComp(
                        components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V3 key={components.lenght} text={desc[index]}/></li>]
                    )
                    }}
                    break;
                case "v4":
                    if (visuals.length > components.length) {
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V4 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                    setComp(
                        components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V4 key={components.lenght} text={desc[index]}/></li>]
                    )
                    }}
                    break;
                case "v5":
                    if (visuals.length > components.length) {
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V5 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                    setComp(
                        components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V5 key={components.lenght} text={desc[index]}/></li>]
                    )
                    }}                 
                    break;
                case "v6":
                    if (visuals.length > components.length) {
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V6 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                    setComp(
                        components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V6 key={components.lenght} text={desc[index]}/></li>]
                    )
                    }}
                    break;
                case "v7":   
                if (visuals.length > components.length) { 
                    if (style == 1) {
                        setComp(
                            components => [...components,<li> <V7 key={components.lenght} text={desc[index]}/></li>]
                        )
                    }else{                
                    setComp(
                        components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V7 key={components.lenght} text={desc[index]}/></li>]
                    )
                }}
                    break; 
                case "v8":
                    if (visuals.length > components.length) {
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V8 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                    setComp(
                        components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V8 key={components.lenght} text={desc[index]}/></li>]
                    )
                    }}
                    break;
                case "v9":
                    if (visuals.length > components.length) {
                        if (style == 1) {
                            setComp(
                                components => [...components,<li> <V9 key={components.lenght} text={desc[index]}/></li>]
                            )
                        }else{
                        setComp(
                            components => [...components,<li style={{display: "inline-block", width: "47%"}}> <V9 key={components.length} text={desc[index]}/></li>]
                        )
                    }}
                    break;           
                default:
                    break;
            }
        });

        if (style == 1) {
            const element = document.querySelector('.content')  
            element.style.listStyle = "none"         
        }else if (style == 2) {
            const element = document.querySelector('.content')
            element.style.display = "inline"
            element.style.listStyle = "none"
        }


        console.log(visuals)
        console.log(style)
        setCounter(counter+1)    
    }
    
    return (
 
        <ul class="content">
        {components}
        </ul>

    )
}
export default UserComponent;

