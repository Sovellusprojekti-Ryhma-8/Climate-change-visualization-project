import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../styles/registeration.css'


const URL = "http://localhost:8080/register"

export default function SignIn() {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [passWord2, setPassWord2] = useState('');
    const [message, setMessage] = useState('');
    const form = new FormData;
    let navigate = useNavigate();


    useEffect(() => {
        if (passWord === passWord2) {
            console.log("yeet");
        }else {
            console.log("nooo")
        }
    })


    let handleSubmit = async (e) => {
        e.preventDefault();

        form.append("userName", userName);
        form.append("passWord", passWord);

        try {
            fetch(URL, {
                method: 'POST',
                body: form
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.status)
                    navigate('/LogIn')
                }else if (res.status === 403) {
                    setMessage("User already exists!")
                }
            }) 
            .catch((error) => {
                console.log(error+ "  error")
                setMessage("Something went wrong")
            })
        } catch(err) {
            console.log(err+ "   err");
            setMessage("err")
        }
       
    }


    return (

        <>
            <div class="register">
                <form class="register-form" onSubmit={handleSubmit}>
                    <div class="block">
                        <label>Username</label>
                        <input class="input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div class="block">
                        <label>Password</label>
                        <input class="input" type="text" value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
                    </div>
                    <div class="block">
                        <label>Password again</label>
                        <input class="input" type="text" value={passWord2} onChange={(e) => setPassWord2(e.target.value)}/>
                    </div>
                    <button class='button' type='submit'>Register</button>
                    <div>
                        <Link to='/LogIn'>Log in</Link>
                    </div>
                </form>
                <p>{message}</p>
            </div>
        </>
    )
}