import { useEffect, useState } from "react";
import React from "react";
import CreateVisualization from "./LuoVisualisointinäkymä";
import V1 from "./V1";
import V2 from "./V2";
import { useParams } from "react-router";
import axios from "axios";

const URL = "http://localhost:3000/views/${Id}"

const UserComponent = (props) => {

    const [components, setComp] = useState([]);
    const [counter, setCounter] = useState(0);
    const Id = useParams()
    // useEffect(() => {
    //     // axios.get(URL)
        

    // })

    if (counter < 1 && Id.id == "jaa") {
        setComp(
            components => [...components, <V1/>]
        )
        setComp(
            components => [...components, <V2/>]
        )
        setCounter(1)    
    }
    
    

    console.log(Id)
    return (
        <>
        {components}
        </>
    )
}
export default UserComponent;

