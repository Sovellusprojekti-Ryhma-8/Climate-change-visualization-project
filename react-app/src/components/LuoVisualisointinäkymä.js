import React, { useCallback } from 'react';
import { useState } from 'react';
import '../styles/createVisualization.css'
import { Component } from 'react';
import DropDownMenu from './DropDownMenu'


export default function CreateVisualization() {
    
    const [visualizations, setVisualizations] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [style, setStyle] = useState(0);
    const [next, setNext] = useState([]);

    let callback = async (data, key) => {
        visualizations.forEach(element => {
            if (element.id == key){
                setVisualizations(
                    visualizations.filter(element =>
                        element.id !== key)
                )
            }
        });
        setVisualizations(current => [...current, {id: key, component: data}])
        console.log(data)
        console.log(key)
    }

    let callback2 = async (data, key) => {
        descriptions.forEach(element => {
            if (element.id == key) {    
                setDescriptions(
                    descriptions.filter(element =>
                        element.id !== key)
                )
            }
        })
        setDescriptions(
            descriptions => [...descriptions, {id: key, text: data}]
        )
        console.log(data)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        console.log(visualizations)
        console.log(descriptions)
        console.log(style)
    }

    let addElement = (e) => {
        e.preventDefault();
        // setNext(next.concat(<DropDownMenu key={next.length}
        //     func={callback} func2={callback2} delete={deleteComponent} 
        //     componentKey={next.length+1}/>))
        setNext(
            next => [...next, <DropDownMenu key={next.length}
                func={callback} func2={callback2} 
                componentKey={next.length+1}/>]
        )
        // console.log(next)
    }

    let deleteComponent = async () => {
        console.log("poistetaan ")
        console.log(next)
        setNext(
            next.filter(element =>
                element.key != next.length-1
            )
        )
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
            <h1 class="heading">Create your own view</h1>
            <DropDownMenu func={callback} func2={callback2} delete={deleteComponent}/>
            {next}
            <div>
                <button style={{padding: 10, fontSize: 14}} class="button" type='submit' onClick={addElement}>Add new</button>
                <button style={{backgroundColor: "red", padding: 10, fontSize: 14}} class="button" onClick={deleteComponent}>Delete</button>

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
