import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './Crime.css'

function Crime () {

    const[data, setData] = useState(
        {
            crime: null,
            noOfcrimes: null,
        }
    );

    const getCrime = async e => {
        // e.preventDefault()
        const req = await axios.get("http://localhost:6969/crime");
        // console.log(req.data.length)
        //  setData({noOfcrimes: req.length})
        setData((prev) => ({...prev, noOfcrimes: req.data.length}))
        console.log(data.noOfcrimes)    
    }
    // getCrime();
    window.onloadstart = getCrime;
    // window.onloadstart(

    // )
    
  return (
    
    <div>
    <h1>Crime</h1>
    <div className='selectors'>
        <select name = "Type">
            
        </select>
    </div>
    </div>
  )
}

export default Crime