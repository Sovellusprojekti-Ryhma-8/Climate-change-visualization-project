import { useEffect, useState } from "react";
import React from "react";
import CreateVisualization from "./LuoVisualisointinäkymä";
import V1 from "./V1";
import V2 from "./V2";
import { useParams } from "react-router";
import axios from "axios";

const URL = "http://localhost:8080/setView"

const UserComponent = (props) => {

    const [components, setComp] = useState([]);
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(1);
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
            setCounter(0)                
        }).catch(error => {
            alert(error)
        })
        
    },[counter])

    if (counter < 1) {
        // console.log(data)
        // setComp(
        //     components => [...components, <V1/>]
        // )
        // setComp(
        //     components => [...components, <V2/>]
        // )
        

        console.log(data)
        setCounter(1)    
    }

    
    

    // console.log(Id.id)
    return (
        <>
        {components}
        </>
    )
}
export default UserComponent;

