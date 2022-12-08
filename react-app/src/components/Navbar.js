import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
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
                <li>
                    <Link class="link" to="/Emissions">Emissions</Link>
                </li>
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
                <li>
                    {localStorage.getItem('token') && (
                    <>
                    <Link class="link" to="/Profile">Profile</Link>
                    </>
                    )}
                </li>
            </ul>

            </div>
                        
         
      );
    }