import React from "react";
import V3_annual from "./V3_annual";
import V1 from "./V1";
import V2 from "./V2";
import '../styles/N1.css'


export default function N1() {
    return (
        <div id="container">
            <V1/>
            <V2/>
            <V3_annual/>
        </div>
    )
}