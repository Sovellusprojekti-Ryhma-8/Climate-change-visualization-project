import {useNavigate } from "react-router-dom";
import '../styles/profile.css'

export default function Profile(){

const navigate = useNavigate();

    function refreshPage(){

        localStorage.removeItem("token")
        navigate('/')
        window.location.reload(false)
    }

    return(
        <>
            <div class="logout">
                <button class='button' onClick={refreshPage}>Logout</button>
            </div>
        </>
        )
}