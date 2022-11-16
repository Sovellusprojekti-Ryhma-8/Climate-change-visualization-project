import React from 'react'
import { useState } from 'react';

const URL= "http://localhost:8080/login"

export default function LogIn() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassword] = useState('');
    


    
    
    
    return (
        <>
    <div>
        <form className="login-form" on submit={handleSubmit}>
        <div>
            <label>Username</label>
            <div>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
        </div>
        <div>
            <label>Password</label>
            <div>
                <input value={passWord} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </div>
        <button class='button' type='submit'>Kirjaudu</button>
        </form>
    </div>
    </>
    )
}



