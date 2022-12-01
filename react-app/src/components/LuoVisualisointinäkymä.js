import React, { useCallback } from 'react';
import { useState } from 'react';
import '../styles/createVisualization.css'
import { Component } from 'react';
import DropDownMenu from './DropDownMenu'

let cb1 = document.getElementById('cb1')
let tb1 = document.getElementById('tb1')

export default function CreateVisualization() {
    
    const [visualizations, setVisualizations] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [style, setStyle] = useState(0);
    const [next, setNext] = useState([]);

    let callback = async (data) => {
        setVisualizations(
            visualizations => [...visualizations, data]
        )
        console.log(data)
    }

    let callback2 = async (data) => {
        setDescriptions(
            descriptions => [...descriptions, data]
        )
        console.log(data)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        console.log(visualizations)
        console.log(descriptions)
        console.log(style)
    }

    let addElement = async (e) => {
        e.preventDefault();
        setNext(next.concat(<DropDownMenu key={next.length} func={callback} func2={callback2}/>))

    }

    let handleChange1 = event => {
        if(event.target.checked) {
            setStyle(1)
        }else {
            setStyle(0)
            
        }
    }

    let handleChange2 = event => {
        if(event.target.checked) {
            setStyle(2)
        }else {
            setStyle(0)
        }
    }


    return (
        <div class="visual-container">
            <DropDownMenu func={callback} func2={callback2}/>
            {next}
            <div>
                <button class="button" type='submit' onClick={addElement}>Add new</button>
            </div>
            <div>
                <span>Tyyli 1</span>
                <input id='style1' type="checkbox" onChange={handleChange1}></input>
                <span>Tyyli 2</span>
                <input id='style2' type="checkbox" onChange={handleChange2}></input>
            </div>
            <div class="button-container">
                <button class="button" type='submit'  onClick={handleSubmit}>Create</button>
            </div>
        </div>
    )
}
