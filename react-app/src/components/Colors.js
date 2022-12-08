import React, { useEffect, useState } from 'react'
let index = 0
let colors = []

export default function Colors() {

    useEffect(() => {
        generateColors()
    }, [])

    //Generate colors and push to array. Count determines how many colors are generated
    function generateColors(){
        if(index === 0){
            index = 1
            let count = 219
            
            while(count > 0){
                const color = '#' + Math.random().toString(16).substring(5,11)
                colors.push(color)
                count--
            }
            console.log(colors)
        }
    }
    return colors
}

