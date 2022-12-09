import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import '../styles/profile.css'

const URL = "http://localhost:8080/myViews"
const Identify = "http://localhost:8080/private"
const URL_views = "http://localhost:3000/views"

export default function Profile(){

const navigate = useNavigate();
let token = localStorage.getItem('token')

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
            myViews(user.data)
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
            links => [...links, <Link to={URL_views+element}>View</Link>]
           ) 
        });
    }

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