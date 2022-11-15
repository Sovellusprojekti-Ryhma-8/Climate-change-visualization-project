import React from 'react';
import { useState } from 'react';


const URL = "http://localhost:8080/register"

export default function SignIn() {

    const [userName, setUserame] = useState('');
    const [passWord, setPassWord] = useState('');
    const form = new FormData;


    let handleSubmit = async (e) => {
        e.preventDefault();

        form.append("userName", userName);
        form.append("passWord", passWord);

        try {
            fetch(URL, {
                method: 'POST',
                body: form
            })
            .then(res => console.log(res))
            .catch(error => console.log(error))
        } catch(err) {
            console.log(err);
        }
       
    }

   

    return (

        <>
            <div class="register">
                <form class="register-form" onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserame(e.target.value)}/>
                    <input type="text" value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
                    <button class='button' type='submit'>Rekisteröidy</button>
                </form>
            </div>
        </>
    )
}