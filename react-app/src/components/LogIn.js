import React from "react"
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aToken from "../components/aToken";

const URL="http://localhost:8080/login"

export default function Login() {

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const navigate = useNavigate()

    const sendLoginRequest = (e) => {
        e.preventDefault()

        axios.post(URL, {},
            {params: {userName,passWord}
            }).then(res => {
                const token = res.data
                localStorage.setItem("token", token)
                aToken(token)
                console.log(token)
                navigate('/')
                window.location.reload(false);
            }).catch(err => console.log(err))
    }

    return (

        <>
            <div class="login">
                <form class="register-form" onSubmit={sendLoginRequest}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <input type="text" value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
                    <button class='button' type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

