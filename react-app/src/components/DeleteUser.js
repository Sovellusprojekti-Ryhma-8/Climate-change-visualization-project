import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import '../styles/deleteUser.css';



const URL= "http://localhost:8080/deleteUser"

export default function DeleteUser() {

    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate() 
    
   
    const sendDeleteRequest = async(e) => {
        e.preventDefault();

        
        axios.post(URL, {},
            {params: {userName}
            }).then(res => {
                localStorage.removeItem("token")
                navigate('/')
                window.location.reload(false);
            }).catch(err => {
                console.log(err)
                setMessage("User not found")
            })}
       
    


    return (
    <>
        <div class="deleteUser">
            <form class="delete-form" onSubmit={sendDeleteRequest}>
                <div class="block">
                    <label>Käyttäjänimi jonka haluat poistaa</label>
                    <input class="input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                    <button class='button' type='submit'>Delete</button>
                    </div>
                    </form>
                    <p>{message}</p>
                    </div>
    </>
        )

}
