import React from "react";
import '../styles/DropDown.css'

export default function DropDown() {


    return (
        <div class="conf-component">
        <div class="dropdown">
            <button class="dropbtn">Visualizations</button>
            <div class="dropdown-list">
                <a href='#'>V1</a>
                <a href='#'>V2</a>
                <a href='#'>V3</a>
                <a href='#'>V4</a>
                <a href='#'>V5</a>
                <a href='#'>V6</a>
                <a href='#'>V7</a>
                <a href='#'>V8</a>
                <a href='#'>V9</a>
            </div>
        </div>
            <div class="textbox">
                {/* <input type="text"></input> */}
                <textarea class="textarea"></textarea>
            </div>
        </div>
    )
}