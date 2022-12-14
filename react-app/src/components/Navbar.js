import React from "react";
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom";
import '../styles/Navbar.css';


export default function Navbar() {

    const navigate = useNavigate();
    

    function refreshPage(){

        localStorage.removeItem("token")
        navigate('/')
        window.location.reload(false)
    }
            
    
    return (
        <div class="navbar">

            <ul>
                <li>
                    <Link class="link" to="/">Home</Link>
                </li>
                <li>
                    <Link class="link" to="/N1">N1</Link>
                </li>
                <li>
                    <Link class="link" to="/N2">N2</Link>
                </li>
                <li>
                    <Link class="link" to="/N3">N3</Link>
                </li>
                <li>
                    {!localStorage.getItem('token') && (
                    <>
                    <Link class="link" to="/LogIn">Log In</Link>
                    <li>
                    </li>           
                    <Link class="link" to ="/SignIn">Sign In</Link>
                    
                    </>
                    )}
                </li>

                
                <li>
                    <Link class="link" to="/LuoVisualisointinäkymä">Luo Visualisointinäkymä</Link>
                </li>
                {localStorage.getItem('token') && (
                <>
                <li class="deleteUser">
                    </li>
                    <Link class="link" to ="/profile">Profile</Link>
                    </>
            )}
                {localStorage.getItem('token') && (
                <>
                <li class="logout">
                <button class='button' onClick={refreshPage}>Logout</button>
            </li>
            </>
            )}
            </ul>
            </div> 
    )
                        
        }
