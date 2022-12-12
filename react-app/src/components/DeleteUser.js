import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


const URL= "http://localhost:8080/deleteUser"

export default function DeleteUser() {

    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate() 
    const form = new FormData;
    
   
    const sendDeleteRequest = async(e) => {
        e.preventDefault();
        
        form.append("userName", userName);

        try {
            fetch(URL, {
                method: 'POST',
                body: form
            })
            .then((res) => {
                    console.log(res.status)
                    localStorage.removeItem("token")
                    navigate('/')
                    window.location.reload(false)
            }).catch((err) => {
                console.log(err)
                setMessage("Käyttäjää ei ole olemassa")
            })
        } catch(err) {
            console.log(err+ "   err");
            setMessage("err")
        }
       
    }


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
