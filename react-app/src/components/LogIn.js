
import { useState } from 'react';

function LogIn() {
    const [useName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <>
    <div>
        <h3></h3>
        <form>
        <div>
            <label>Username</label>
            <div>
                <input></input>
            </div>
        </div>
        <div>
            <label>Password</label>
            <div>
                <output></output>
            </div>
        </div>
        <button>Log In</button>
        </form>
    </div>
    </>
);
}


export default LogIn;


