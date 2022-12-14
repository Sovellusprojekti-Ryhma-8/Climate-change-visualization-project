import React, { useState } from "react";
import '../styles/DropDown.css'

const DropDown = (props) => {
    
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [btntext, setBtntext] = useState('Visualizations');
    let ID = props.componentKey    

    if (ID == undefined) {
        ID = 0
    }

    let handleClick = async (e) => {
        e.preventDefault()
        console.log("click")
        setBtntext(e.target.text)
        switch (e.target.text) {
            case "V1":
                console.log("v1")
                props.func("v1", ID)
                break;
            case "V2":
                console.log("v2")
                props.func("v2", ID)
                break;
            case "V3":
                console.log("v3")
                props.func("v3", ID)
                break;
            case "V4":
                console.log("v4")
                props.func("v4", ID)
                break;
            case "V5":
                console.log("v5")
                props.func("v5", ID)
                break;
            case "V6":
                console.log("v6")
                props.func("v6", ID)
                break;
            case "V7":
                console.log("v7")
                props.func("v7", ID)
                break;
            case "V8":
                console.log("v8")
                props.func("v8", ID)
                break;
            case "V9":
                console.log("v9")
                props.func("v9", ID)
                break;
            default:
                console.log("Ei ole")
                break;
        }
        
    }

    let handleChange = (e) => {
        setText(e.target.value)
        setMessage("")
    }

    let addVisualization = (e) => {
    if (text.length > 0 && btntext.length < 3) {
            props.func2(text, ID)
        }else {
            setMessage("Description is empty!")
        }
    }

    return (
        <div class="conf-component">
        <div class="dropdown">
            <button class="dropbtn">{btntext}</button>
            <div class="dropdown-list">
                <a href='#' onClick={handleClick}>V1</a>
                <a href='#' onClick={handleClick}>V2</a>
                <a href='#' onClick={handleClick}>V3</a>
                <a href='#' onClick={handleClick}>V4</a>
                <a href='#' onClick={handleClick}>V5</a>
                <a href='#' onClick={handleClick}>V6</a>
                <a href='#' onClick={handleClick}>V7</a>
                <a href='#' onClick={handleClick}>V8</a>
                <a href='#' onClick={handleClick}>V9</a>
            </div>
        </div>
            <div class="textbox" >
                <textarea class="textarea" onChange={handleChange}></textarea>
                <p style={{color: "red"}}>{message}</p>
                <button style={{padding: 10, fontSize: 14, marginRight: "2em"}} class="button" onClick={addVisualization}>Add visualization</button>
                
            </div>
        </div>
    )
}

export default DropDown;