import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/createVisualization.css'
import DropDownMenu from './DropDownMenu'

const URL = "http://localhost:8080/saveView"
const Identify = "http://localhost:8080/private"

const CreateVisualization = (props) => {
    
    const [visualizations, setVisualizations] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [style, setStyle] = useState(0);
    const [next, setNext] = useState([]);
    const [user, setUser] = useState('');
    const form = new FormData;
    let navigate = useNavigate();

    let token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/LogIn')
        }else{        
            axios({
            method: 'get',
            url : Identify,
            headers: {
                "Authorization": "Bearer "+token
            }
        })
        .then((res) => {
            setUser(res.data)
            console.log(res.data)
        }).catch(error => {
            alert(error)
        })}


    },[])


    /*Selected visualizations from child component are pushed to list*/ 

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
    }

    /*Selected descriptions from child component are pushed to list*/ 

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

    /*When "Create" button is pressed, all data about view is send to server
    and unique id for view is generated. */

    let handleSubmit = async (e) => {
        // e.preventDefault();
        
        const uid = () =>   
        String(
            Date.now().toString(32) +
            Math.random().toString(16)
        ).replace(/\./g, '')
        
        

        form.append("Id", uid())
        visualizations.forEach((item) => form.append("visualizations", item.id+" "+item.component))
        descriptions.forEach((item) => form.append("descriptions", item.id+" "+item.text))
        form.append("style", style)
        form.append("user", user)
        console.log(form.getAll("visualizations"))
        console.log(form.getAll("descriptions"))
        console.log(form.getAll("user"))
        let url = form.getAll("Id")

        window.location.reload(false);  
        window.open("http://localhost:3000/views/"+url, '_blank', 'noopener,noreferrer');


        try {
            fetch(URL, {
                method: 'POST',
                body: form,
            })
            .then((res) => {
                console.log(res.status)
            })
        } catch (error) {
            alert(error)
        }

        console.log(style) 
        
    }

    /*New component is added to list when "Add new" is pressed*/

    let addElement = (e) => {
        e.preventDefault();
        setNext(
            next => [...next, <DropDownMenu key={next.length}
                func={callback} func2={callback2} 
                componentKey={next.length+1}/>]
        )
    }

    /*Component is deleted from the list*/

    let deleteComponent = async () => {
        console.log("poistetaan ")
        console.log(next)
        setNext(
            next.filter(element =>
                element.key != next.length-1
            )
        )
        setVisualizations(
            visualizations.filter(element =>
                element.id !== next.length)
            ) 
        setDescriptions(
            descriptions.filter(element =>
                element.id !== next.length)
        )  
    }

    /*Selected styles are set */

    let handleChange1 = event => {
        if(event.target.checked) {
            setStyle(1)
        }else {
            setStyle(1)
            
        }
    }

    let handleChange2 = event => {
        if(event.target.checked) {
            setStyle(2)
        }else {
            setStyle(1)
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
                <span>Style 1</span>
                <input id='style1' type="checkbox" onChange={handleChange1}></input>
                <span>Style 2</span>
                <input id='style2' type="checkbox" onChange={handleChange2}></input>
            </div>
            <div class="button-container">
                <button class="button" type='submit'  onClick={handleSubmit}>Create</button>
            </div>
        </div>
    )
}

export default CreateVisualization;