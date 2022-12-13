import axios from "axios";
import { useEffect, useState } from "react";
import DeleteUser from "./DeleteUser";
import '../styles/profile.css'

const URL = "http://localhost:8080/myViews"
const Identify = "http://localhost:8080/private"
const URL_views = "http://localhost:3000/views/"
const delete_view = "http://localhost:8080/deleteView"
let i = 0;

export default function Profile(){

let token = localStorage.getItem('token')

    const [links, SetLinks] = useState([]);

    const getUser = async () => {
        
        const user = await axios.get(Identify,
            {
                headers: {
                    "Authorization": "Bearer "+token
                }
            })
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
             <button key={element} class="button" style={{backgroundColor: "red", padding: 7, fontSize: 10}} onClick={() => handleDelete(element)}>Delete view</button></>]
           ) 
        });
    }

    async function handleDelete(Id)   
     {
        console.log(Id)
        const response = await axios.post(delete_view, null,
            {
                params: {Id}
            })
            console.log(response.status)
            window.location.reload(false);
    } 

    useEffect(() => {
        getUser() 
    },[])


 
    return(
        <>
            <div class="myViews">
                <h2>My Views</h2>
                {links}
            </div>
            <div>
                <DeleteUser/>
            </div>
        </>
        )
}
