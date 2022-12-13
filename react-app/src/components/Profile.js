import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import '../styles/profile.css'

const URL = "http://localhost:8080/myViews"
const Identify = "http://localhost:8080/private"
const URL_views = "http://localhost:3000/views/"
const delete_view = "http://localhost:8080/deleteView"
let i = 0;

export default function Profile(){

const navigate = useNavigate();
let token = localStorage.getItem('token')
const form = new FormData;

    function refreshPage(){

        localStorage.removeItem("token")
        navigate('/')
        window.location.reload(false)
    }

    // const [user, setUser] = useState('');
    const [links, SetLinks] = useState([]);

    const getUser = async () => {
        
        const user = await axios.get(Identify,
            {
                headers: {
                    "Authorization": "Bearer "+token
                }
            })
            // setUser(user.data)
            console.log(user.data)
            if (i < 1) {
            myViews(user.data)
            i = 1;
        }
    }

    const myViews = async (user) => {
        const data = await axios.get(URL,
            {
                params: {user}
            })
        console.log(data.data)
        const arr = data.data
        arr.forEach(element => {
           SetLinks(
            links => [...links, <><a href={URL_views+element} target="_blank" rel="noreferer" >View</a>
             <button key={element} class="button" style={{backgroundColor: "red", padding: 7, fontSize: 10}} >Delete view</button></>]
           ) 
        });
    }

    // let handleDelete = (Id) => {
    //     // e.preventdefault()
    //     form.append("Id", Id)
    //     console.log(Id)
    //     console.log(form.getAll("Id"))
    //     axios.post(delete_view, 
    //         {
    //             body: form
    //         }).then((res) => {
    //             console.log(res.data)
    //         }).catch(error => {
    //             alert(error)
    //         })
    // } 

    useEffect(() => {
        getUser() 
    },[])


 
    return(
        <>
            <div class="myviews">
                <h2>My Views</h2>
                {links}
            </div>
            <div class="logout">
                <button class='button' onClick={refreshPage}>Logout</button>
            </div>
        </>
        )
}
