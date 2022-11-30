import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './GenderStat.css'


const GenderStat = () => {

    const [testStore, setTest] = useState({
        PrisonState: null,
        dYear: null,
        sex: null,

    });

    const handleChange = (e) => {
        setTest((prev) => ({...prev, [e.target.name]: e.target.value}))

    }
    // console.log(testStore)
    const handleClick = async e => {
        e.preventDefault()
        try {
            
            const res = await axios.get("http://localhost:6969/test3"+"/"+testStore.PrisonState+"/"+testStore.dYear+"/"+testStore.sex )
            const val = res.data[0]["sum(noPrisoners)"]
            document.getElementById("result").innerHTML = 'No. of prisoners: ' + (val === null ? 0 : val)

        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
        <h1>Gender Stats</h1>
        <input type="text" placeholder='State' name='PrisonState' onChange={handleChange}></input>
        <input type="number" placeholder='Year' name='dYear' onChange={handleChange}></input>
        <input type="text" placeholder='Sex' name='sex' onChange={handleChange}></input>
        <button onClick={handleClick}>Search</button>
        <div className='Result' id='result'>
            
        </div>
        </div>
    )
}

export default GenderStat